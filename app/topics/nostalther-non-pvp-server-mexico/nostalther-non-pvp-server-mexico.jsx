import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-non-pvp-server-mexico');
}

export default function NostaltherNonPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="nostalther-non-pvp-server-mexico" />;
}
