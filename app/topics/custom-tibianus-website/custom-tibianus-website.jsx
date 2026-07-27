import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibianus-website');
}

export default function CustomTibianusWebsiteKeywordPage() {
  return <StaticKeywordPage slug="custom-tibianus-website" />;
}
