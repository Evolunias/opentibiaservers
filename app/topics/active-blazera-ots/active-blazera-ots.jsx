import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-blazera-ots');
}

export default function ActiveBlazeraOtsKeywordPage() {
  return <StaticKeywordPage slug="active-blazera-ots" />;
}
