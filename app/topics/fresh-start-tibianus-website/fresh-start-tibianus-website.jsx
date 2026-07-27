import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibianus-website');
}

export default function FreshStartTibianusWebsiteKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibianus-website" />;
}
