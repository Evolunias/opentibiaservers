import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-with-screenshots-server-usa');
}

export default function DemolidoresWithScreenshotsServerUsaKeywordPage() {
  return <StaticKeywordPage slug="demolidores-with-screenshots-server-usa" />;
}
