import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-classicus-official');
}

export default function CurrentClassicusOfficialKeywordPage() {
  return <StaticKeywordPage slug="current-classicus-official" />;
}
