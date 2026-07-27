import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-non-pvp-server-brazil');
}

export default function NostaltherNonPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="nostalther-non-pvp-server-brazil" />;
}
