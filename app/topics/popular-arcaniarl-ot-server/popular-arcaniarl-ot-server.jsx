import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-arcaniarl-ot-server');
}

export default function PopularArcaniarlOtServerKeywordPage() {
  return <StaticKeywordPage slug="popular-arcaniarl-ot-server" />;
}
