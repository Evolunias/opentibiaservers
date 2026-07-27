import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-official');
}

export default function BaiakIlusionOfficialKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-official" />;
}
