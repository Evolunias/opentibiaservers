import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-with-screenshots-server-poland');
}

export default function AlasteraWithScreenshotsServerPolandKeywordPage() {
  return <StaticKeywordPage slug="alastera-with-screenshots-server-poland" />;
}
