import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-retro-server-brazil');
}

export default function RealeraRetroServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="realera-retro-server-brazil" />;
}
