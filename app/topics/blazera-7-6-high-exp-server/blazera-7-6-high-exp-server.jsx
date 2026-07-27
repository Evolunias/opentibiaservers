import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-7-6-high-exp-server');
}

export default function Blazera76HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-7-6-high-exp-server" />;
}
