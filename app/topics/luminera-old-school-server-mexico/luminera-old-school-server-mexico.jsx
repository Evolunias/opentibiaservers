import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-old-school-server-mexico');
}

export default function LumineraOldSchoolServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="luminera-old-school-server-mexico" />;
}
