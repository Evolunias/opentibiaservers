import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-oxygenot-ot-server');
}

export default function NewOxygenotOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-oxygenot-ot-server" />;
}
