import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-old-school-server-argentina');
}

export default function LumineraOldSchoolServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="luminera-old-school-server-argentina" />;
}
