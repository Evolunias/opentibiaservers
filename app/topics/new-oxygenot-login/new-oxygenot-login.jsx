import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-oxygenot-login');
}

export default function NewOxygenotLoginKeywordPage() {
  return <StaticKeywordPage slug="new-oxygenot-login" />;
}
