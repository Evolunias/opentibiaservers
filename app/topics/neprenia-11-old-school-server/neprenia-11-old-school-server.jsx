import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-11-old-school-server');
}

export default function Neprenia11OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-11-old-school-server" />;
}
