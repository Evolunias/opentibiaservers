import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-with-screenshots-server-mexico');
}

export default function CyntaraWithScreenshotsServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="cyntara-with-screenshots-server-mexico" />;
}
