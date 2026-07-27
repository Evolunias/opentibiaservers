import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-blazera-ots');
}

export default function TopBlazeraOtsKeywordPage() {
  return <StaticKeywordPage slug="top-blazera-ots" />;
}
