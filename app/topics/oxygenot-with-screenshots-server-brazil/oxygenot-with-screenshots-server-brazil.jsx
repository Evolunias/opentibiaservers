import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-with-screenshots-server-brazil');
}

export default function OxygenotWithScreenshotsServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-with-screenshots-server-brazil" />;
}
