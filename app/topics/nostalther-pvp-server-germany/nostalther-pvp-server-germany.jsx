import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-pvp-server-germany');
}

export default function NostaltherPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="nostalther-pvp-server-germany" />;
}
