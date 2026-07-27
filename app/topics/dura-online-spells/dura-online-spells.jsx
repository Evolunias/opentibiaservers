import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-spells');
}

export default function DuraOnlineSpellsKeywordPage() {
  return <StaticKeywordPage slug="dura-online-spells" />;
}
