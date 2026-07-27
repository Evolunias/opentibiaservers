import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-with-screenshots-server-germany');
}

export default function CyntaraWithScreenshotsServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="cyntara-with-screenshots-server-germany" />;
}
