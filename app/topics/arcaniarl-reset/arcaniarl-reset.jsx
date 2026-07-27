import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-reset');
}

export default function ArcaniarlResetKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-reset" />;
}
