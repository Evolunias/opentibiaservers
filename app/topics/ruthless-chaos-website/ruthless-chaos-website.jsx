import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-website');
}

export default function RuthlessChaosWebsiteKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-website" />;
}
