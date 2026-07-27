import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-9-6-old-school-server');
}

export default function Nostalther96OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-9-6-old-school-server" />;
}
