import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('open-tibia-server-list-download');
}

export default function OpenTibiaServerListDownloadKeywordPage() {
  return <StaticKeywordPage slug="open-tibia-server-list-download" />;
}
