import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-ruthless-chaos-download');
}

export default function CurrentRuthlessChaosDownloadKeywordPage() {
  return <StaticKeywordPage slug="current-ruthless-chaos-download" />;
}
