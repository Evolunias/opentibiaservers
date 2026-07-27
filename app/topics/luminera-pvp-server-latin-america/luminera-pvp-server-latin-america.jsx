import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-pvp-server-latin-america');
}

export default function LumineraPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="luminera-pvp-server-latin-america" />;
}
