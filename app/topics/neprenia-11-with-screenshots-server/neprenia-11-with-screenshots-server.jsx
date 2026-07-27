import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-11-with-screenshots-server');
}

export default function Neprenia11WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-11-with-screenshots-server" />;
}
