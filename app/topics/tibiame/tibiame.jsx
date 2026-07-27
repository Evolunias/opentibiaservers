import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame');
}

export default function TibiameKeywordPage() {
  return <StaticKeywordPage slug="tibiame" />;
}
