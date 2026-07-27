import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-reset');
}

export default function TibiantisResetKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-reset" />;
}
