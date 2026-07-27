import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiara-official');
}

export default function NewTibiaraOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-tibiara-official" />;
}
