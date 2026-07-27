import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-evolunia-ot-server');
}

export default function OfficialEvoluniaOtServerKeywordPage() {
  return <StaticKeywordPage slug="official-evolunia-ot-server" />;
}
