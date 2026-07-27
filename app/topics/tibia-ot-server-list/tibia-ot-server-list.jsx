import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-ot-server-list');
}

export default function TibiaOtServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-ot-server-list" />;
}
