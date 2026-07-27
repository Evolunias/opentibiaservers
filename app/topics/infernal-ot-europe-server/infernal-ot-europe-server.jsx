import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-europe-server');
}

export default function InfernalOtEuropeServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-europe-server" />;
}
