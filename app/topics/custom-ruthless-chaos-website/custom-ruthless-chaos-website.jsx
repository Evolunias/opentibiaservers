import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-ruthless-chaos-website');
}

export default function CustomRuthlessChaosWebsiteKeywordPage() {
  return <StaticKeywordPage slug="custom-ruthless-chaos-website" />;
}
