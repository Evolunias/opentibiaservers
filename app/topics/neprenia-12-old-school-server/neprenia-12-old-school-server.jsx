import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-12-old-school-server');
}

export default function Neprenia12OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-12-old-school-server" />;
}
