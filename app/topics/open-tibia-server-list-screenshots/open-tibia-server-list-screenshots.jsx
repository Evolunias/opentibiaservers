import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('open-tibia-server-list-screenshots');
}

export default function OpenTibiaServerListScreenshotsKeywordPage() {
  return <StaticKeywordPage slug="open-tibia-server-list-screenshots" />;
}
