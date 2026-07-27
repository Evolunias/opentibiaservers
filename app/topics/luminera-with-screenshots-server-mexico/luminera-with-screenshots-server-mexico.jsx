import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-with-screenshots-server-mexico');
}

export default function LumineraWithScreenshotsServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="luminera-with-screenshots-server-mexico" />;
}
