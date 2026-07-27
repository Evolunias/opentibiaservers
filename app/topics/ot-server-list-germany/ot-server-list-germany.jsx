import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ot-server-list-germany');
}

export default function OtServerListGermanyKeywordPage() {
  return <StaticKeywordPage slug="ot-server-list-germany" />;
}
