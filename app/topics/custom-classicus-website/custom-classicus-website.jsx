import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-classicus-website');
}

export default function CustomClassicusWebsiteKeywordPage() {
  return <StaticKeywordPage slug="custom-classicus-website" />;
}
