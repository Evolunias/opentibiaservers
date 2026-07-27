import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-ruthless-chaos-website');
}

export default function BestRuthlessChaosWebsiteKeywordPage() {
  return <StaticKeywordPage slug="best-ruthless-chaos-website" />;
}
