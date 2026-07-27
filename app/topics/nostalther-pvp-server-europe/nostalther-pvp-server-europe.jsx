import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-pvp-server-europe');
}

export default function NostaltherPvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="nostalther-pvp-server-europe" />;
}
