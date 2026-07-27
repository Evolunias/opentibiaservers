import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-10-0-old-school-server');
}

export default function Nostalther100OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-10-0-old-school-server" />;
}
