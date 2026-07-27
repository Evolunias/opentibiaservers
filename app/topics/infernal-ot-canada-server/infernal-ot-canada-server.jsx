import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-canada-server');
}

export default function InfernalOtCanadaServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-canada-server" />;
}
