import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-servers-france');
}

export default function PvpServersFranceKeywordPage() {
  return <StaticKeywordPage slug="pvp-servers-france" />;
}
