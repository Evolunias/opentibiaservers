import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-rubinot-server');
}

export default function NewRubinotServerKeywordPage() {
  return <StaticKeywordPage slug="new-rubinot-server" />;
}
