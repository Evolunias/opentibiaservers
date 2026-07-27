import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-server-usa');
}

export default function RetroServerUsaKeywordPage() {
  return <StaticKeywordPage slug="retro-server-usa" />;
}
