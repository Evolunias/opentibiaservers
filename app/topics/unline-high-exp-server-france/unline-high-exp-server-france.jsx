import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-high-exp-server-france');
}

export default function UnlineHighExpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="unline-high-exp-server-france" />;
}
