import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-ruthless-chaos-download');
}

export default function NewRuthlessChaosDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-ruthless-chaos-download" />;
}
