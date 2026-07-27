import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-pvp-server-south-america');
}

export default function NilotPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="nilot-pvp-server-south-america" />;
}
