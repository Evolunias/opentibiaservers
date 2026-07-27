import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-low-exp-server-france');
}

export default function MiracleLowExpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="miracle-low-exp-server-france" />;
}
