import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-with-screenshots-server-argentina');
}

export default function RealeraWithScreenshotsServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="realera-with-screenshots-server-argentina" />;
}
