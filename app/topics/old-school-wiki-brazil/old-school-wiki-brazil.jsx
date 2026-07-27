import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-wiki-brazil');
}

export default function OldSchoolWikiBrazilKeywordPage() {
  return <StaticKeywordPage slug="old-school-wiki-brazil" />;
}
