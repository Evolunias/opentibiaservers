import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-saintsot-website');
}

export default function CurrentSaintsotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="current-saintsot-website" />;
}
