import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibianus-website');
}

export default function ActiveTibianusWebsiteKeywordPage() {
  return <StaticKeywordPage slug="active-tibianus-website" />;
}
