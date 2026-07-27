import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ot-server-list-high-exp');
}

export default function OtServerListHighExpKeywordPage() {
  return <StaticKeywordPage slug="ot-server-list-high-exp" />;
}
