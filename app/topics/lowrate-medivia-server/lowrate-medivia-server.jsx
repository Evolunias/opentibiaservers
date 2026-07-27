import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-medivia-server');
}

export default function LowrateMediviaServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-medivia-server" />;
}
