import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-north-america-server');
}

export default function InfernalOtNorthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-north-america-server" />;
}
