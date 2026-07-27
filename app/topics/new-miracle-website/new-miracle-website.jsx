import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-miracle-website');
}

export default function NewMiracleWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-miracle-website" />;
}
