import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-with-screenshots-server-argentina');
}

export default function AlasteraWithScreenshotsServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="alastera-with-screenshots-server-argentina" />;
}
