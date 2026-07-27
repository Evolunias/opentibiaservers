import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-xanteria-website');
}

export default function OldSchoolXanteriaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="old-school-xanteria-website" />;
}
