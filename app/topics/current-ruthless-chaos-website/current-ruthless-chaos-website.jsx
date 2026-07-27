import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-ruthless-chaos-website');
}

export default function CurrentRuthlessChaosWebsiteKeywordPage() {
  return <StaticKeywordPage slug="current-ruthless-chaos-website" />;
}
