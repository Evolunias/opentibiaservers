import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-arcaniarl-ot-server');
}

export default function FreshStartArcaniarlOtServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-arcaniarl-ot-server" />;
}
