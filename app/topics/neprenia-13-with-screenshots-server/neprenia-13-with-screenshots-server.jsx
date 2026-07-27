import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-13-with-screenshots-server');
}

export default function Neprenia13WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-13-with-screenshots-server" />;
}
