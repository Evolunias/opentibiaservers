import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-server-argentina');
}

export default function RetroServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="retro-server-argentina" />;
}
