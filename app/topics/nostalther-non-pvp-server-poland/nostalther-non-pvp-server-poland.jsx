import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-non-pvp-server-poland');
}

export default function NostaltherNonPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="nostalther-non-pvp-server-poland" />;
}
