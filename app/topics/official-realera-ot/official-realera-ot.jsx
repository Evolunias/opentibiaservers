import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-realera-ot');
}

export default function OfficialRealeraOtKeywordPage() {
  return <StaticKeywordPage slug="official-realera-ot" />;
}
