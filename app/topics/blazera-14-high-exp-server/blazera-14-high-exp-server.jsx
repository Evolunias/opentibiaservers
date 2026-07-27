import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-14-high-exp-server');
}

export default function Blazera14HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-14-high-exp-server" />;
}
