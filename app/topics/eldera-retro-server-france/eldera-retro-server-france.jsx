import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-retro-server-france');
}

export default function ElderaRetroServerFranceKeywordPage() {
  return <StaticKeywordPage slug="eldera-retro-server-france" />;
}
