import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-evolunia-ot-server');
}

export default function PopularEvoluniaOtServerKeywordPage() {
  return <StaticKeywordPage slug="popular-evolunia-ot-server" />;
}
