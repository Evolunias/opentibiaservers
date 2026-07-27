import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-cyntara-ot-server');
}

export default function NewCyntaraOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-cyntara-ot-server" />;
}
