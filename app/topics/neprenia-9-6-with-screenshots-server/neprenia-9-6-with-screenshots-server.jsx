import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-9-6-with-screenshots-server');
}

export default function Neprenia96WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-9-6-with-screenshots-server" />;
}
