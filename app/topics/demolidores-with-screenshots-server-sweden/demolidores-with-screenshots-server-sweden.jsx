import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-with-screenshots-server-sweden');
}

export default function DemolidoresWithScreenshotsServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="demolidores-with-screenshots-server-sweden" />;
}
