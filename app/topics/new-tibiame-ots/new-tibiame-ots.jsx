import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiame-ots');
}

export default function NewTibiameOtsKeywordPage() {
  return <StaticKeywordPage slug="new-tibiame-ots" />;
}
