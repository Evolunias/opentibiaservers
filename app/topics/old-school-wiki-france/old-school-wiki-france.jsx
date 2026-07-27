import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-wiki-france');
}

export default function OldSchoolWikiFranceKeywordPage() {
  return <StaticKeywordPage slug="old-school-wiki-france" />;
}
