import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-13-high-exp-server');
}

export default function Blazera13HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-13-high-exp-server" />;
}
