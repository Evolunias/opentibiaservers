import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-coxaot-website');
}

export default function ActiveCoxaotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="active-coxaot-website" />;
}
