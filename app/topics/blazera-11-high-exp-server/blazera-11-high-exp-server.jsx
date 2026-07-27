import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-11-high-exp-server');
}

export default function Blazera11HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-11-high-exp-server" />;
}
