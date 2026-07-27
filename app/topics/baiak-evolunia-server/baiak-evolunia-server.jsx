import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-evolunia-server');
}

export default function BaiakEvoluniaServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-evolunia-server" />;
}
