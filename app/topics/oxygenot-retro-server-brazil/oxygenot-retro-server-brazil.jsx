import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-retro-server-brazil');
}

export default function OxygenotRetroServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-retro-server-brazil" />;
}
