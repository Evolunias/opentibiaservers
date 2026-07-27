import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-france-servers');
}

export default function InfernalOtFranceServersKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-france-servers" />;
}
