import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-high-exp-server-france');
}

export default function DuraOnlineHighExpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="dura-online-high-exp-server-france" />;
}
