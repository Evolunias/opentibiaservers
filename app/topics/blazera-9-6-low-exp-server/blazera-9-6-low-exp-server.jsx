import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-9-6-low-exp-server');
}

export default function Blazera96LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-9-6-low-exp-server" />;
}
