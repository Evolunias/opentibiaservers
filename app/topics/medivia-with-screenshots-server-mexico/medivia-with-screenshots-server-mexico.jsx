import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-with-screenshots-server-mexico');
}

export default function MediviaWithScreenshotsServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="medivia-with-screenshots-server-mexico" />;
}
