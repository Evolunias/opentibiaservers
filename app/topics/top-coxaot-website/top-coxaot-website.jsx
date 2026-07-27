import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-coxaot-website');
}

export default function TopCoxaotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="top-coxaot-website" />;
}
