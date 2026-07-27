import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-10-0-low-exp-server');
}

export default function AureraGlobal100LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-10-0-low-exp-server" />;
}
