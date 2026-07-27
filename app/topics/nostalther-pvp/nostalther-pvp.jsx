import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-pvp');
}

export default function NostaltherPvpKeywordPage() {
  return <StaticKeywordPage slug="nostalther-pvp" />;
}
