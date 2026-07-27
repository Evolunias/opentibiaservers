import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-with-screenshots-server-brazil');
}

export default function RealestaWithScreenshotsServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="realesta-with-screenshots-server-brazil" />;
}
