import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-15-high-exp-server');
}

export default function Blazera15HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-15-high-exp-server" />;
}
