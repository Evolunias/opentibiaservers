import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-baiak-server-france');
}

export default function MiracleBaiakServerFranceKeywordPage() {
  return <StaticKeywordPage slug="miracle-baiak-server-france" />;
}
