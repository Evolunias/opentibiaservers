import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-with-screenshots-server-usa');
}

export default function AlasteraWithScreenshotsServerUsaKeywordPage() {
  return <StaticKeywordPage slug="alastera-with-screenshots-server-usa" />;
}
