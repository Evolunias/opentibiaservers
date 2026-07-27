import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-ruthless-chaos-website');
}

export default function NewSeasonRuthlessChaosWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-season-ruthless-chaos-website" />;
}
