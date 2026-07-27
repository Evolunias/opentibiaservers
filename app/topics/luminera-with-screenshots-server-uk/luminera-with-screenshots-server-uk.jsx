import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-with-screenshots-server-uk');
}

export default function LumineraWithScreenshotsServerUkKeywordPage() {
  return <StaticKeywordPage slug="luminera-with-screenshots-server-uk" />;
}
