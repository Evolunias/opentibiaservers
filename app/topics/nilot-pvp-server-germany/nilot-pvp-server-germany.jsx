import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-pvp-server-germany');
}

export default function NilotPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="nilot-pvp-server-germany" />;
}
