import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-classicus-client');
}

export default function LowrateClassicusClientKeywordPage() {
  return <StaticKeywordPage slug="lowrate-classicus-client" />;
}
