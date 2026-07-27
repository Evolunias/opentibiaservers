import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-custom-server-list');
}

export default function TibiaCustomServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-custom-server-list" />;
}
