import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-screenshots');
}

export default function CyntaraScreenshotsKeywordPage() {
  return <StaticKeywordPage slug="cyntara-screenshots" />;
}
