import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('the-forgotten-server-real-map');
}

export default function TheForgottenServerRealMapKeywordPage() {
  return <StaticKeywordPage slug="the-forgotten-server-real-map" />;
}
