import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-pvp-server-south-america');
}

export default function LumineraPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="luminera-pvp-server-south-america" />;
}
