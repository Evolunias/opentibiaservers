import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-with-screenshots-server-brazil');
}

export default function DemolidoresWithScreenshotsServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="demolidores-with-screenshots-server-brazil" />;
}
