import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiame');
}

export default function FreshStartTibiameKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiame" />;
}
