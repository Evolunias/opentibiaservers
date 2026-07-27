import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-retro-server-france');
}

export default function OriginaltibiaRetroServerFranceKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-retro-server-france" />;
}
