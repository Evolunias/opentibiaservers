import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-ruthless-chaos-website');
}

export default function NoResetRuthlessChaosWebsiteKeywordPage() {
  return <StaticKeywordPage slug="no-reset-ruthless-chaos-website" />;
}
