import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('forgotten-server-real-map');
}

export default function ForgottenServerRealMapKeywordPage() {
  return <StaticKeywordPage slug="forgotten-server-real-map" />;
}
