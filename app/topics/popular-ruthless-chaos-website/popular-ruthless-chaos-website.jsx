import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-ruthless-chaos-website');
}

export default function PopularRuthlessChaosWebsiteKeywordPage() {
  return <StaticKeywordPage slug="popular-ruthless-chaos-website" />;
}
