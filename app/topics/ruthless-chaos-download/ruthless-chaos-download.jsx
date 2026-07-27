import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-download');
}

export default function RuthlessChaosDownloadKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-download" />;
}
