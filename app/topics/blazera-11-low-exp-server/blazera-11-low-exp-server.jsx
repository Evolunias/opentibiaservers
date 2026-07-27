import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-11-low-exp-server');
}

export default function Blazera11LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-11-low-exp-server" />;
}
