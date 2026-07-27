import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-nilot');
}

export default function OldSchoolNilotKeywordPage() {
  return <StaticKeywordPage slug="old-school-nilot" />;
}
