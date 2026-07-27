import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-with-screenshots-server-sweden');
}

export default function CyntaraWithScreenshotsServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="cyntara-with-screenshots-server-sweden" />;
}
