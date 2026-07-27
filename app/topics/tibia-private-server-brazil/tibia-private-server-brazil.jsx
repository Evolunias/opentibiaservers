import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-private-server-brazil');
}

export default function TibiaPrivateServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibia-private-server-brazil" />;
}
