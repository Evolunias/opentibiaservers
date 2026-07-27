import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-7-1-low-exp-server');
}

export default function Blazera71LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-7-1-low-exp-server" />;
}
