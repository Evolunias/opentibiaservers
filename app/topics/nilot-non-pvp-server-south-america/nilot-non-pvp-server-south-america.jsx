import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-non-pvp-server-south-america');
}

export default function NilotNonPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="nilot-non-pvp-server-south-america" />;
}
