import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibianus-website');
}

export default function LowrateTibianusWebsiteKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibianus-website" />;
}
