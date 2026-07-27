import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-10-0-high-exp-server');
}

export default function Shadowcores100HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-10-0-high-exp-server" />;
}
