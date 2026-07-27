import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-quests');
}

export default function SabrehavenQuestsKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-quests" />;
}
