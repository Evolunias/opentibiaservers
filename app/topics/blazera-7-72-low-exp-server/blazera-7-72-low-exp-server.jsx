import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-7-72-low-exp-server');
}

export default function Blazera772LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-7-72-low-exp-server" />;
}
