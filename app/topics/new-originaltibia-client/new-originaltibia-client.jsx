import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-originaltibia-client');
}

export default function NewOriginaltibiaClientKeywordPage() {
  return <StaticKeywordPage slug="new-originaltibia-client" />;
}
