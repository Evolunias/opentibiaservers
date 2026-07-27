import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-retro-server-france');
}

export default function RealestaRetroServerFranceKeywordPage() {
  return <StaticKeywordPage slug="realesta-retro-server-france" />;
}
