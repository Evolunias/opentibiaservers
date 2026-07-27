import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-classicus-official');
}

export default function NewClassicusOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-classicus-official" />;
}
