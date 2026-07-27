import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-98-fresh-start-server');
}

export default function Tibia1098FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-98-fresh-start-server" />;
}
