import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis');
}

export default function TibiantisKeywordPage() {
  return <StaticKeywordPage slug="tibiantis" />;
}
