import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-server-list-france');
}

export default function RetroServerListFranceKeywordPage() {
  return <StaticKeywordPage slug="retro-server-list-france" />;
}
