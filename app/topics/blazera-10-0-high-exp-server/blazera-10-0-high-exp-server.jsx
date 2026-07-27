import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-10-0-high-exp-server');
}

export default function Blazera100HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-10-0-high-exp-server" />;
}
