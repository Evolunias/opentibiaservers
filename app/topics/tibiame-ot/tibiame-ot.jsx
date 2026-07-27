import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-ot');
}

export default function TibiameOtKeywordPage() {
  return <StaticKeywordPage slug="tibiame-ot" />;
}
