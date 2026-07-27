import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-with-screenshots-server-europe');
}

export default function DemolidoresWithScreenshotsServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="demolidores-with-screenshots-server-europe" />;
}
