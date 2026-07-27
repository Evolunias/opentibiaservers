import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-canob-client');
}

export default function OldSchoolCanobClientKeywordPage() {
  return <StaticKeywordPage slug="old-school-canob-client" />;
}
