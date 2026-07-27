import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-old-school-server-poland');
}

export default function LumineraOldSchoolServerPolandKeywordPage() {
  return <StaticKeywordPage slug="luminera-old-school-server-poland" />;
}
