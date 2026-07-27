import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-blazera-ot');
}

export default function FreshStartBlazeraOtKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-blazera-ot" />;
}
