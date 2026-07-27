import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-high-exp');
}

export default function TibiameHighExpKeywordPage() {
  return <StaticKeywordPage slug="tibiame-high-exp" />;
}
