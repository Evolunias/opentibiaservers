import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-ruthless-chaos-website');
}

export default function LowrateRuthlessChaosWebsiteKeywordPage() {
  return <StaticKeywordPage slug="lowrate-ruthless-chaos-website" />;
}
