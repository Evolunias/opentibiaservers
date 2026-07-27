import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-classicus-website');
}

export default function ActiveClassicusWebsiteKeywordPage() {
  return <StaticKeywordPage slug="active-classicus-website" />;
}
