import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-pvp-server-europe');
}

export default function NilotPvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="nilot-pvp-server-europe" />;
}
