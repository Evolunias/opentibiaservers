import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-ruthless-chaos-download');
}

export default function CustomRuthlessChaosDownloadKeywordPage() {
  return <StaticKeywordPage slug="custom-ruthless-chaos-download" />;
}
