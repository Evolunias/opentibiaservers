import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-miracle-website');
}

export default function ActiveMiracleWebsiteKeywordPage() {
  return <StaticKeywordPage slug="active-miracle-website" />;
}
