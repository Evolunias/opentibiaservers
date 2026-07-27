import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-evolunia-ot-server');
}

export default function FreshStartEvoluniaOtServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-evolunia-ot-server" />;
}
