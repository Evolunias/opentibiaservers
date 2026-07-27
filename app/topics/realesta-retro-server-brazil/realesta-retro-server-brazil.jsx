import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-retro-server-brazil');
}

export default function RealestaRetroServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="realesta-retro-server-brazil" />;
}
