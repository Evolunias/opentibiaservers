import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-servers-usa');
}

export default function RetroServersUsaKeywordPage() {
  return <StaticKeywordPage slug="retro-servers-usa" />;
}
