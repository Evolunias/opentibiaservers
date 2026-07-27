import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-originaltibia-server');
}

export default function NewOriginaltibiaServerKeywordPage() {
  return <StaticKeywordPage slug="new-originaltibia-server" />;
}
