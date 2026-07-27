import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-evolunia-server');
}

export default function HighExpEvoluniaServerKeywordPage() {
  return <StaticKeywordPage slug="high-exp-evolunia-server" />;
}
