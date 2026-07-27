import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-baiak-ilusion-server');
}

export default function NewBaiakIlusionServerKeywordPage() {
  return <StaticKeywordPage slug="new-baiak-ilusion-server" />;
}
