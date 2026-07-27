import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-arcaniarl-ot-server');
}

export default function ActiveArcaniarlOtServerKeywordPage() {
  return <StaticKeywordPage slug="active-arcaniarl-ot-server" />;
}
