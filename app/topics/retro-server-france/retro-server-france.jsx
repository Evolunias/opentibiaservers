import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-server-france');
}

export default function RetroServerFranceKeywordPage() {
  return <StaticKeywordPage slug="retro-server-france" />;
}
