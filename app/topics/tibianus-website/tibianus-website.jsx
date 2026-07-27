import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-website');
}

export default function TibianusWebsiteKeywordPage() {
  return <StaticKeywordPage slug="tibianus-website" />;
}
