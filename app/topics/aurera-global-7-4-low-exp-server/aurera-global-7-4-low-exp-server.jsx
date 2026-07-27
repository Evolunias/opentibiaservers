import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-7-4-low-exp-server');
}

export default function AureraGlobal74LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-7-4-low-exp-server" />;
}
