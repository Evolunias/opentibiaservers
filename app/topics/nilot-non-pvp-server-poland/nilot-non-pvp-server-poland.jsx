import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-non-pvp-server-poland');
}

export default function NilotNonPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="nilot-non-pvp-server-poland" />;
}
