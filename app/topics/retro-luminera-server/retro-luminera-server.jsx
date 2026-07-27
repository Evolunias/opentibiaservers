import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-luminera-server');
}

export default function RetroLumineraServerKeywordPage() {
  return <StaticKeywordPage slug="retro-luminera-server" />;
}
