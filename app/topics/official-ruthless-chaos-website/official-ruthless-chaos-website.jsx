import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-ruthless-chaos-website');
}

export default function OfficialRuthlessChaosWebsiteKeywordPage() {
  return <StaticKeywordPage slug="official-ruthless-chaos-website" />;
}
