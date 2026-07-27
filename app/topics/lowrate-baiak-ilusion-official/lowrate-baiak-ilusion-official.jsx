import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-baiak-ilusion-official');
}

export default function LowrateBaiakIlusionOfficialKeywordPage() {
  return <StaticKeywordPage slug="lowrate-baiak-ilusion-official" />;
}
