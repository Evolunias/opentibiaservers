import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-classicus-client');
}

export default function BestClassicusClientKeywordPage() {
  return <StaticKeywordPage slug="best-classicus-client" />;
}
