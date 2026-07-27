import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-website');
}

export default function ClassicusWebsiteKeywordPage() {
  return <StaticKeywordPage slug="classicus-website" />;
}
