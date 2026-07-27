import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-evolunia-server');
}

export default function ActiveEvoluniaServerKeywordPage() {
  return <StaticKeywordPage slug="active-evolunia-server" />;
}
