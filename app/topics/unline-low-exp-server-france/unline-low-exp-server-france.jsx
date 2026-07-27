import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-low-exp-server-france');
}

export default function UnlineLowExpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="unline-low-exp-server-france" />;
}
