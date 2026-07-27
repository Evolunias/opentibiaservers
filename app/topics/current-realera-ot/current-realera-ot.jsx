import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-realera-ot');
}

export default function CurrentRealeraOtKeywordPage() {
  return <StaticKeywordPage slug="current-realera-ot" />;
}
