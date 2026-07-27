import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-8-4-with-screenshots-server');
}

export default function Neprenia84WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-8-4-with-screenshots-server" />;
}
