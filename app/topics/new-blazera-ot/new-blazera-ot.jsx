import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-blazera-ot');
}

export default function NewBlazeraOtKeywordPage() {
  return <StaticKeywordPage slug="new-blazera-ot" />;
}
