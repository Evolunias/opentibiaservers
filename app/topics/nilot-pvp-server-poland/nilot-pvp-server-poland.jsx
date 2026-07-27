import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-pvp-server-poland');
}

export default function NilotPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="nilot-pvp-server-poland" />;
}
