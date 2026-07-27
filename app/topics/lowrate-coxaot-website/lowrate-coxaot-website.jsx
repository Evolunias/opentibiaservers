import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-coxaot-website');
}

export default function LowrateCoxaotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="lowrate-coxaot-website" />;
}
