import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-screenshots');
}

export default function RuthlessChaosScreenshotsKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-screenshots" />;
}
