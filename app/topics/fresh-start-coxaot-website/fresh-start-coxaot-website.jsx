import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-coxaot-website');
}

export default function FreshStartCoxaotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-coxaot-website" />;
}
