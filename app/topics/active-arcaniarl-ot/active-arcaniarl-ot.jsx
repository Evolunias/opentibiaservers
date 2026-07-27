import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-arcaniarl-ot');
}

export default function ActiveArcaniarlOtKeywordPage() {
  return <StaticKeywordPage slug="active-arcaniarl-ot" />;
}
