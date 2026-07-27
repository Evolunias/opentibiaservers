import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-retro-server-sweden');
}

export default function InfernalOtRetroServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-retro-server-sweden" />;
}
