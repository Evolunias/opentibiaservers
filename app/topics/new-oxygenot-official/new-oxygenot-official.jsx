import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-oxygenot-official');
}

export default function NewOxygenotOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-oxygenot-official" />;
}
