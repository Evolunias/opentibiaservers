import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-blazera-ot');
}

export default function TopBlazeraOtKeywordPage() {
  return <StaticKeywordPage slug="top-blazera-ot" />;
}
