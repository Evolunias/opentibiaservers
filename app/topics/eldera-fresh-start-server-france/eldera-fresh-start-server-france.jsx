import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-fresh-start-server-france');
}

export default function ElderaFreshStartServerFranceKeywordPage() {
  return <StaticKeywordPage slug="eldera-fresh-start-server-france" />;
}
