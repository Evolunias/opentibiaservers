import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-arcaniarl-ots');
}

export default function FreshStartArcaniarlOtsKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-arcaniarl-ots" />;
}
