import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-fresh-start-server');
}

export default function Tibia14FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-fresh-start-server" />;
}
