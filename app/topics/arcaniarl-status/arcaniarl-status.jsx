import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-status');
}

export default function ArcaniarlStatusKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-status" />;
}
