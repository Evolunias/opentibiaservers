import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-non-pvp-server-europe');
}

export default function NilotNonPvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="nilot-non-pvp-server-europe" />;
}
