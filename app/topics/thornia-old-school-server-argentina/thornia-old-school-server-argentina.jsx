import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-old-school-server-argentina');
}

export default function ThorniaOldSchoolServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="thornia-old-school-server-argentina" />;
}
