import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-arcaniarl-ots');
}

export default function CustomArcaniarlOtsKeywordPage() {
  return <StaticKeywordPage slug="custom-arcaniarl-ots" />;
}
