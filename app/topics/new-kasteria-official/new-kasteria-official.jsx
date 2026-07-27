import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-kasteria-official');
}

export default function NewKasteriaOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-kasteria-official" />;
}
