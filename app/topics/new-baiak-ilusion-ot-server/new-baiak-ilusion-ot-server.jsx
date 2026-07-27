import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-baiak-ilusion-ot-server');
}

export default function NewBaiakIlusionOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-baiak-ilusion-ot-server" />;
}
