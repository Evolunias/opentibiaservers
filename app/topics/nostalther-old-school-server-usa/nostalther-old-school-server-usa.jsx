import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-old-school-server-usa');
}

export default function NostaltherOldSchoolServerUsaKeywordPage() {
  return <StaticKeywordPage slug="nostalther-old-school-server-usa" />;
}
