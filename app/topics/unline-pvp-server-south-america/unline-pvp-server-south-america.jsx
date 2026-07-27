import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-pvp-server-south-america');
}

export default function UnlinePvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="unline-pvp-server-south-america" />;
}
