import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-with-screenshots-server-argentina');
}

export default function DemolidoresWithScreenshotsServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="demolidores-with-screenshots-server-argentina" />;
}
