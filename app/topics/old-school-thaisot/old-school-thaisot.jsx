import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-thaisot');
}

export default function OldSchoolThaisotKeywordPage() {
  return <StaticKeywordPage slug="old-school-thaisot" />;
}
