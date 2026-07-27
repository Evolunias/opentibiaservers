import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibia-custom-server');
}

export default function BestTibiaCustomServerKeywordPage() {
  return <StaticKeywordPage slug="best-tibia-custom-server" />;
}
