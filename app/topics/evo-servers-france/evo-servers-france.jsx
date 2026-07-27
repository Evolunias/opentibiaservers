import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-servers-france');
}

export default function EvoServersFranceKeywordPage() {
  return <StaticKeywordPage slug="evo-servers-france" />;
}
