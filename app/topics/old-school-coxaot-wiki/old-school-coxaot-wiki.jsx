import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-coxaot-wiki');
}

export default function OldSchoolCoxaotWikiKeywordPage() {
  return <StaticKeywordPage slug="old-school-coxaot-wiki" />;
}
