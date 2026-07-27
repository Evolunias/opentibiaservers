import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-ruthless-chaos-website');
}

export default function HighrateRuthlessChaosWebsiteKeywordPage() {
  return <StaticKeywordPage slug="highrate-ruthless-chaos-website" />;
}
