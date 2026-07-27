import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-baiak-server-france');
}

export default function DuraOnlineBaiakServerFranceKeywordPage() {
  return <StaticKeywordPage slug="dura-online-baiak-server-france" />;
}
