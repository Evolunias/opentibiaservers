import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-retro-server-south-america');
}

export default function InfernalOtRetroServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-retro-server-south-america" />;
}
