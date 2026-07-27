import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-fresh-start-server');
}

export default function Tibia772FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-fresh-start-server" />;
}
