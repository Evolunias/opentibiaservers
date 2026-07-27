import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-evolunia-server');
}

export default function LowExpEvoluniaServerKeywordPage() {
  return <StaticKeywordPage slug="low-exp-evolunia-server" />;
}
