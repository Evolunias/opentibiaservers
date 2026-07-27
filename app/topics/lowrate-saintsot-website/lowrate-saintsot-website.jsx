import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-saintsot-website');
}

export default function LowrateSaintsotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="lowrate-saintsot-website" />;
}
