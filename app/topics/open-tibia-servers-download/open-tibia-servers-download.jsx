import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('open-tibia-servers-download');
}

export default function OpenTibiaServersDownloadKeywordPage() {
  return <StaticKeywordPage slug="open-tibia-servers-download" />;
}
