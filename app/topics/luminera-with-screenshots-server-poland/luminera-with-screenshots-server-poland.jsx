import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-with-screenshots-server-poland');
}

export default function LumineraWithScreenshotsServerPolandKeywordPage() {
  return <StaticKeywordPage slug="luminera-with-screenshots-server-poland" />;
}
