import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-servers-argentina');
}

export default function RetroServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="retro-servers-argentina" />;
}
