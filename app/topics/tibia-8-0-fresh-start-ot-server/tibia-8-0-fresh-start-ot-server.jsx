import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-fresh-start-ot-server');
}

export default function Tibia80FreshStartOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-fresh-start-ot-server" />;
}
