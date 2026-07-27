import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-7-1-high-exp-server');
}

export default function Blazera71HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-7-1-high-exp-server" />;
}
