import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-12-with-screenshots-server');
}

export default function Neprenia12WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-12-with-screenshots-server" />;
}
