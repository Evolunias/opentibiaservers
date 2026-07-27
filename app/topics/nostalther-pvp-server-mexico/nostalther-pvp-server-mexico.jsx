import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-pvp-server-mexico');
}

export default function NostaltherPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="nostalther-pvp-server-mexico" />;
}
