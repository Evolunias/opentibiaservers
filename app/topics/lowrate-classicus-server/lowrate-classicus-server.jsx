import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-classicus-server');
}

export default function LowrateClassicusServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-classicus-server" />;
}
