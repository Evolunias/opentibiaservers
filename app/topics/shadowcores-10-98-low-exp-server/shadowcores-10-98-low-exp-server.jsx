import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-10-98-low-exp-server');
}

export default function Shadowcores1098LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-10-98-low-exp-server" />;
}
