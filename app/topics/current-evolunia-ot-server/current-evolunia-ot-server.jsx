import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-evolunia-ot-server');
}

export default function CurrentEvoluniaOtServerKeywordPage() {
  return <StaticKeywordPage slug="current-evolunia-ot-server" />;
}
