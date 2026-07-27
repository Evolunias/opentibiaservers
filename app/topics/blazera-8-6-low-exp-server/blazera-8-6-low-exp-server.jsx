import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-8-6-low-exp-server');
}

export default function Blazera86LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-8-6-low-exp-server" />;
}
