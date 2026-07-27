import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-status');
}

export default function TibiantisStatusKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-status" />;
}
