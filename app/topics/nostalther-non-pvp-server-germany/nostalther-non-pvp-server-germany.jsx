import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-non-pvp-server-germany');
}

export default function NostaltherNonPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="nostalther-non-pvp-server-germany" />;
}
