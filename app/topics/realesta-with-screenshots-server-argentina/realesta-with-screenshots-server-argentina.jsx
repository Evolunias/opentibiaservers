import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-with-screenshots-server-argentina');
}

export default function RealestaWithScreenshotsServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="realesta-with-screenshots-server-argentina" />;
}
