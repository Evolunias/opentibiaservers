import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-7-4-high-exp-server');
}

export default function Blazera74HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-7-4-high-exp-server" />;
}
