import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-ot');
}

export default function BlazeraOtKeywordPage() {
  return <StaticKeywordPage slug="blazera-ot" />;
}
