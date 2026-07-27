import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-arcaniarl-ot-server');
}

export default function TopArcaniarlOtServerKeywordPage() {
  return <StaticKeywordPage slug="top-arcaniarl-ot-server" />;
}
