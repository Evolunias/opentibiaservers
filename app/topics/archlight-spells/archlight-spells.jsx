import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-spells');
}

export default function ArchlightSpellsKeywordPage() {
  return <StaticKeywordPage slug="archlight-spells" />;
}
