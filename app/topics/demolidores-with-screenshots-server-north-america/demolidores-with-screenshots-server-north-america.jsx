import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-with-screenshots-server-north-america');
}

export default function DemolidoresWithScreenshotsServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="demolidores-with-screenshots-server-north-america" />;
}
