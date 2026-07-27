import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-ruthless-chaos-download');
}

export default function PopularRuthlessChaosDownloadKeywordPage() {
  return <StaticKeywordPage slug="popular-ruthless-chaos-download" />;
}
