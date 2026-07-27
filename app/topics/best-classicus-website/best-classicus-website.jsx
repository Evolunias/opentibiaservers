import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-classicus-website');
}

export default function BestClassicusWebsiteKeywordPage() {
  return <StaticKeywordPage slug="best-classicus-website" />;
}
