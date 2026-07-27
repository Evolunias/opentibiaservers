import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-fresh-start-open-tibia-server');
}

export default function Tibia15FreshStartOpenTibiaServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-fresh-start-open-tibia-server" />;
}
