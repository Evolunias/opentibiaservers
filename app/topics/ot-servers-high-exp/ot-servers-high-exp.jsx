import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ot-servers-high-exp');
}

export default function OtServersHighExpKeywordPage() {
  return <StaticKeywordPage slug="ot-servers-high-exp" />;
}
