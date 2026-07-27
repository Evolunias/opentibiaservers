import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-ots');
}

export default function ArcaniarlOtsKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-ots" />;
}
