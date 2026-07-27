import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-14-with-screenshots-server');
}

export default function Neprenia14WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-14-with-screenshots-server" />;
}
