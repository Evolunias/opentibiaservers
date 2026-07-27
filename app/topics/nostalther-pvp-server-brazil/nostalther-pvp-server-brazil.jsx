import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-pvp-server-brazil');
}

export default function NostaltherPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="nostalther-pvp-server-brazil" />;
}
