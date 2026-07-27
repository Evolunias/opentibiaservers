import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-ruthless-chaos-download');
}

export default function LowrateRuthlessChaosDownloadKeywordPage() {
  return <StaticKeywordPage slug="lowrate-ruthless-chaos-download" />;
}
