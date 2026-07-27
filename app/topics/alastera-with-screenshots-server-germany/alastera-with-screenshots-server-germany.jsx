import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-with-screenshots-server-germany');
}

export default function AlasteraWithScreenshotsServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="alastera-with-screenshots-server-germany" />;
}
