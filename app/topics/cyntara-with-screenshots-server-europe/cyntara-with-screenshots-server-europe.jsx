import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-with-screenshots-server-europe');
}

export default function CyntaraWithScreenshotsServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="cyntara-with-screenshots-server-europe" />;
}
