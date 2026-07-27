import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-with-screenshots-server-mexico');
}

export default function RealeraWithScreenshotsServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="realera-with-screenshots-server-mexico" />;
}
