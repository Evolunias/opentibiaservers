import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-evo-servers-poland');
}

export default function ArchlightEvoServersPolandKeywordPage() {
  return <StaticKeywordPage slug="archlight-evo-servers-poland" />;
}
