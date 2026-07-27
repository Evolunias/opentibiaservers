import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-non-pvp-server-europe');
}

export default function NostaltherNonPvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="nostalther-non-pvp-server-europe" />;
}
