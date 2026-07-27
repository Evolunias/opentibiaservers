import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-retro-server-france');
}

export default function EvoluniaRetroServerFranceKeywordPage() {
  return <StaticKeywordPage slug="evolunia-retro-server-france" />;
}
