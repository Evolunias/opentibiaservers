import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-evolunia-website');
}

export default function OldSchoolEvoluniaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="old-school-evolunia-website" />;
}
