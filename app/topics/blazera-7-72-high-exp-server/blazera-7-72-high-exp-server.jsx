import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-7-72-high-exp-server');
}

export default function Blazera772HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-7-72-high-exp-server" />;
}
