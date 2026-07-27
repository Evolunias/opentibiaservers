import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-with-screenshots-server-germany');
}

export default function NilotWithScreenshotsServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="nilot-with-screenshots-server-germany" />;
}
