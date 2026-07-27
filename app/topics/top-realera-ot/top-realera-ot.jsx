import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-realera-ot');
}

export default function TopRealeraOtKeywordPage() {
  return <StaticKeywordPage slug="top-realera-ot" />;
}
