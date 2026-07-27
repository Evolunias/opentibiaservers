import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-south-america-server');
}

export default function InfernalOtSouthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-south-america-server" />;
}
