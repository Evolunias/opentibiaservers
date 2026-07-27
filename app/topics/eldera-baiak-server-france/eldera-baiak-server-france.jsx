import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-baiak-server-france');
}

export default function ElderaBaiakServerFranceKeywordPage() {
  return <StaticKeywordPage slug="eldera-baiak-server-france" />;
}
