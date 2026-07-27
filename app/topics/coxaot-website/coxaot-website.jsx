import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-website');
}

export default function CoxaotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="coxaot-website" />;
}
