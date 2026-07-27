import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-france-server');
}

export default function InfernalOtFranceServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-france-server" />;
}
