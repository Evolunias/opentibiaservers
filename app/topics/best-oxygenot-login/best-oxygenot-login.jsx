import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-oxygenot-login');
}

export default function BestOxygenotLoginKeywordPage() {
  return <StaticKeywordPage slug="best-oxygenot-login" />;
}
