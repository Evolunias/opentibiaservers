import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-with-screenshots-server-germany');
}

export default function DemolidoresWithScreenshotsServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="demolidores-with-screenshots-server-germany" />;
}
