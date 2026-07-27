import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-baiak-ilusion-official');
}

export default function HighrateBaiakIlusionOfficialKeywordPage() {
  return <StaticKeywordPage slug="highrate-baiak-ilusion-official" />;
}
