import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-ruthless-chaos-website');
}

export default function FreshStartRuthlessChaosWebsiteKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-ruthless-chaos-website" />;
}
