import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-with-screenshots-server-france');
}

export default function DemolidoresWithScreenshotsServerFranceKeywordPage() {
  return <StaticKeywordPage slug="demolidores-with-screenshots-server-france" />;
}
