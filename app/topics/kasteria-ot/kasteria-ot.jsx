import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-ot');
}

export default function KasteriaOtKeywordPage() {
  return <StaticKeywordPage slug="kasteria-ot" />;
}
