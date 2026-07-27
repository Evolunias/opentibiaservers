import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-high-exp');
}

export default function ArcaniarlHighExpKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-high-exp" />;
}
