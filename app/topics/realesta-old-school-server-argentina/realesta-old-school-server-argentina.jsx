import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-old-school-server-argentina');
}

export default function RealestaOldSchoolServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="realesta-old-school-server-argentina" />;
}
