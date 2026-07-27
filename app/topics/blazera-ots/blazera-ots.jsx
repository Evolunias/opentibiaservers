import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-ots');
}

export default function BlazeraOtsKeywordPage() {
  return <StaticKeywordPage slug="blazera-ots" />;
}
