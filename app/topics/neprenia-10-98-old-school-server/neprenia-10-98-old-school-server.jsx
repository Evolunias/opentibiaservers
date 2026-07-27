import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-10-98-old-school-server');
}

export default function Neprenia1098OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-10-98-old-school-server" />;
}
