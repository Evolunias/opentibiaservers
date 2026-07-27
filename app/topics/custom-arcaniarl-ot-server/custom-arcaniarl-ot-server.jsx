import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-arcaniarl-ot-server');
}

export default function CustomArcaniarlOtServerKeywordPage() {
  return <StaticKeywordPage slug="custom-arcaniarl-ot-server" />;
}
