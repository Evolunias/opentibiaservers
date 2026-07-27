import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-pvp-server-north-america');
}

export default function LumineraPvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="luminera-pvp-server-north-america" />;
}
