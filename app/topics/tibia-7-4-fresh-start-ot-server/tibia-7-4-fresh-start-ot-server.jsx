import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-fresh-start-ot-server');
}

export default function Tibia74FreshStartOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-fresh-start-ot-server" />;
}
