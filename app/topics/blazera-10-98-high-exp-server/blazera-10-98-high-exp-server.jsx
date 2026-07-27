import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-10-98-high-exp-server');
}

export default function Blazera1098HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-10-98-high-exp-server" />;
}
