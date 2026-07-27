import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiame');
}

export default function NewTibiameKeywordPage() {
  return <StaticKeywordPage slug="new-tibiame" />;
}
