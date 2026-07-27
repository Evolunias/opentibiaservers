import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-low-exp-server-france');
}

export default function DuraOnlineLowExpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="dura-online-low-exp-server-france" />;
}
