import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-ruthless-chaos-download');
}

export default function ActiveRuthlessChaosDownloadKeywordPage() {
  return <StaticKeywordPage slug="active-ruthless-chaos-download" />;
}
