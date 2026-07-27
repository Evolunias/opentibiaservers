import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-retro-server-brazil');
}

export default function ImperianicRetroServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="imperianic-retro-server-brazil" />;
}
