import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-website');
}

export default function CyntaraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="cyntara-website" />;
}
