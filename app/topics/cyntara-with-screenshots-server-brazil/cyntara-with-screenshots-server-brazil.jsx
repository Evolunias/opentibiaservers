import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-with-screenshots-server-brazil');
}

export default function CyntaraWithScreenshotsServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="cyntara-with-screenshots-server-brazil" />;
}
