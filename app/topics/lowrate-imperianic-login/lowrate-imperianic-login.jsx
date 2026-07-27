import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-imperianic-login');
}

export default function LowrateImperianicLoginKeywordPage() {
  return <StaticKeywordPage slug="lowrate-imperianic-login" />;
}
