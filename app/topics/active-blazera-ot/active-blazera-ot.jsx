import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-blazera-ot');
}

export default function ActiveBlazeraOtKeywordPage() {
  return <StaticKeywordPage slug="active-blazera-ot" />;
}
