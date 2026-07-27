import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-pvp-server-poland');
}

export default function TibiantisPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-pvp-server-poland" />;
}
