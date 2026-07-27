import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-retro-server-north-america');
}

export default function InfernalOtRetroServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-retro-server-north-america" />;
}
