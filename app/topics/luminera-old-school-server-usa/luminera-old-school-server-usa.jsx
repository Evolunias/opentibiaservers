import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-old-school-server-usa');
}

export default function LumineraOldSchoolServerUsaKeywordPage() {
  return <StaticKeywordPage slug="luminera-old-school-server-usa" />;
}
