import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-blazera-ot');
}

export default function CustomBlazeraOtKeywordPage() {
  return <StaticKeywordPage slug="custom-blazera-ot" />;
}
