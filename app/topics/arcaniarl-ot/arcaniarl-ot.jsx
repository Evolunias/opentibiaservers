import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-ot');
}

export default function ArcaniarlOtKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-ot" />;
}
