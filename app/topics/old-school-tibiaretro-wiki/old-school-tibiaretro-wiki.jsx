import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiaretro-wiki');
}

export default function OldSchoolTibiaretroWikiKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiaretro-wiki" />;
}
