import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-imperianic-server');
}

export default function LowrateImperianicServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-imperianic-server" />;
}
