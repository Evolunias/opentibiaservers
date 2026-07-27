import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-baiak-ilusion-official');
}

export default function NewBaiakIlusionOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-baiak-ilusion-official" />;
}
