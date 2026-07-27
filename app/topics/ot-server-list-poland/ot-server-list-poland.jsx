import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ot-server-list-poland');
}

export default function OtServerListPolandKeywordPage() {
  return <StaticKeywordPage slug="ot-server-list-poland" />;
}
