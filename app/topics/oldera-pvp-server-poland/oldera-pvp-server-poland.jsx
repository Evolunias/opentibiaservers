import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-pvp-server-poland');
}

export default function OlderaPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="oldera-pvp-server-poland" />;
}
