import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-with-screenshots-server-usa');
}

export default function CyntaraWithScreenshotsServerUsaKeywordPage() {
  return <StaticKeywordPage slug="cyntara-with-screenshots-server-usa" />;
}
