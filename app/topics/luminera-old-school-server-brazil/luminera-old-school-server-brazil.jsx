import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-old-school-server-brazil');
}

export default function LumineraOldSchoolServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="luminera-old-school-server-brazil" />;
}
