import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-evolunia-ot-server');
}

export default function TopEvoluniaOtServerKeywordPage() {
  return <StaticKeywordPage slug="top-evolunia-ot-server" />;
}
