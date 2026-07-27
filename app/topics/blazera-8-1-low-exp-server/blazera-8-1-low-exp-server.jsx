import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-8-1-low-exp-server');
}

export default function Blazera81LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-8-1-low-exp-server" />;
}
