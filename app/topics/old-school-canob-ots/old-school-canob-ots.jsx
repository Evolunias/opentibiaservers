import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-canob-ots');
}

export default function OldSchoolCanobOtsKeywordPage() {
  return <StaticKeywordPage slug="old-school-canob-ots" />;
}
