import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-ruthless-chaos-website');
}

export default function ActiveRuthlessChaosWebsiteKeywordPage() {
  return <StaticKeywordPage slug="active-ruthless-chaos-website" />;
}
