import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-ruthless-chaos-download');
}

export default function NoResetRuthlessChaosDownloadKeywordPage() {
  return <StaticKeywordPage slug="no-reset-ruthless-chaos-download" />;
}
