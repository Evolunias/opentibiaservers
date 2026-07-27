import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-rubinot-login');
}

export default function NewRubinotLoginKeywordPage() {
  return <StaticKeywordPage slug="new-rubinot-login" />;
}
