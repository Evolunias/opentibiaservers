import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-pvp-server-france');
}

export default function LumineraPvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="luminera-pvp-server-france" />;
}
