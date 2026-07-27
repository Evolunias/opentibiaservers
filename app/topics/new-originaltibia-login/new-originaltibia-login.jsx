import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-originaltibia-login');
}

export default function NewOriginaltibiaLoginKeywordPage() {
  return <StaticKeywordPage slug="new-originaltibia-login" />;
}
