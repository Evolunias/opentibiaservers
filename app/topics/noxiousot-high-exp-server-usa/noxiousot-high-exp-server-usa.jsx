import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-high-exp-server-usa');
}

export default function NoxiousotHighExpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-high-exp-server-usa" />;
}
