import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ot-servers-list');
}

export default function OtServersListKeywordPage() {
  return <StaticKeywordPage slug="ot-servers-list" />;
}
