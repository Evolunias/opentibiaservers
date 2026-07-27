import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-7-6-with-screenshots-server');
}

export default function Neprenia76WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-7-6-with-screenshots-server" />;
}
