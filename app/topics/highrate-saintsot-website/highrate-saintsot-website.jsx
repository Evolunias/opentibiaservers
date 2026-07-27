import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-saintsot-website');
}

export default function HighrateSaintsotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="highrate-saintsot-website" />;
}
