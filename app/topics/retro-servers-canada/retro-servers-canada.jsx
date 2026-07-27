import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-servers-canada');
}

export default function RetroServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="retro-servers-canada" />;
}
