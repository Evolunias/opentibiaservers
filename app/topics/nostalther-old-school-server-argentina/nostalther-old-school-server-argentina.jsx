import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-old-school-server-argentina');
}

export default function NostaltherOldSchoolServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="nostalther-old-school-server-argentina" />;
}
