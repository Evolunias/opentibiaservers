import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('jamera-open-pvp');
}

export default function JameraOpenPvpKeywordPage() {
  return <StaticKeywordPage slug="jamera-open-pvp" />;
}
