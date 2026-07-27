import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-13-low-exp-server');
}

export default function AureraGlobal13LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-13-low-exp-server" />;
}
