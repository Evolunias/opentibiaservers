import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-ruthless-chaos-website');
}

export default function RealMapRuthlessChaosWebsiteKeywordPage() {
  return <StaticKeywordPage slug="real-map-ruthless-chaos-website" />;
}
