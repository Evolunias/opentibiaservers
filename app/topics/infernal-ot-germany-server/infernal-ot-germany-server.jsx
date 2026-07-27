import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-germany-server');
}

export default function InfernalOtGermanyServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-germany-server" />;
}
