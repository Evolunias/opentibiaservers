import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-arcaniarl-ots');
}

export default function NewArcaniarlOtsKeywordPage() {
  return <StaticKeywordPage slug="new-arcaniarl-ots" />;
}
