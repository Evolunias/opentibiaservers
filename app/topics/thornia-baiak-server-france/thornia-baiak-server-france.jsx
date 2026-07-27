import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-baiak-server-france');
}

export default function ThorniaBaiakServerFranceKeywordPage() {
  return <StaticKeywordPage slug="thornia-baiak-server-france" />;
}
