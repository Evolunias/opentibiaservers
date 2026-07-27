import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-non-pvp-server-south-america');
}

export default function UnlineNonPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="unline-non-pvp-server-south-america" />;
}
