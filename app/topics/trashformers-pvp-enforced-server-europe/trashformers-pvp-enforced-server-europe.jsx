import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-pvp-enforced-server-europe');
}

export default function TrashformersPvpEnforcedServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="trashformers-pvp-enforced-server-europe" />;
}
