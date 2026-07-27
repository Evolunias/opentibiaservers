import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-servers-france');
}

export default function NonPvpServersFranceKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-servers-france" />;
}
