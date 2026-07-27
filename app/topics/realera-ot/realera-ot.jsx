import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-ot');
}

export default function RealeraOtKeywordPage() {
  return <StaticKeywordPage slug="realera-ot" />;
}
