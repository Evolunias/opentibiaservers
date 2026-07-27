import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-canob-ot');
}

export default function OldSchoolCanobOtKeywordPage() {
  return <StaticKeywordPage slug="old-school-canob-ot" />;
}
