import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-server-brazil');
}

export default function RetroServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="retro-server-brazil" />;
}
