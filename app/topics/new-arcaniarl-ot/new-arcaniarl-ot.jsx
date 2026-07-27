import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-arcaniarl-ot');
}

export default function NewArcaniarlOtKeywordPage() {
  return <StaticKeywordPage slug="new-arcaniarl-ot" />;
}
