import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-originaltibia-ot-server');
}

export default function NewOriginaltibiaOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-originaltibia-ot-server" />;
}
