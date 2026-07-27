import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-8-0-low-exp-server');
}

export default function AureraGlobal80LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-8-0-low-exp-server" />;
}
