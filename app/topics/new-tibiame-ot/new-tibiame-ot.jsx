import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiame-ot');
}

export default function NewTibiameOtKeywordPage() {
  return <StaticKeywordPage slug="new-tibiame-ot" />;
}
