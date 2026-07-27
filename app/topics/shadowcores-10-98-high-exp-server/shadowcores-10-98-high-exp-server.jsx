import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-10-98-high-exp-server');
}

export default function Shadowcores1098HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-10-98-high-exp-server" />;
}
