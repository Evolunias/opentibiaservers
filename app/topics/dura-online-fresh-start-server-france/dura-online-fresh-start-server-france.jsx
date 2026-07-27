import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-fresh-start-server-france');
}

export default function DuraOnlineFreshStartServerFranceKeywordPage() {
  return <StaticKeywordPage slug="dura-online-fresh-start-server-france" />;
}
