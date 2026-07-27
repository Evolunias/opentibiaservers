import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-non-pvp-server-germany');
}

export default function NilotNonPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="nilot-non-pvp-server-germany" />;
}
