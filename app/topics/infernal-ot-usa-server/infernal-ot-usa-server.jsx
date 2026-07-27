import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-usa-server');
}

export default function InfernalOtUsaServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-usa-server" />;
}
