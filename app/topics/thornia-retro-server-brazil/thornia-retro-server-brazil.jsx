import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-retro-server-brazil');
}

export default function ThorniaRetroServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="thornia-retro-server-brazil" />;
}
