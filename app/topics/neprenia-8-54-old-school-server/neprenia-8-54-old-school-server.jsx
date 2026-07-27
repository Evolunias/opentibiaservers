import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-8-54-old-school-server');
}

export default function Neprenia854OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-8-54-old-school-server" />;
}
