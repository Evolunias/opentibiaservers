import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-coxaot-website');
}

export default function PopularCoxaotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="popular-coxaot-website" />;
}
