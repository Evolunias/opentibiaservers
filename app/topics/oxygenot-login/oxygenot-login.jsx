import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-login');
}

export default function OxygenotLoginKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-login" />;
}
