import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-8-1-old-school-server');
}

export default function Neprenia81OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-8-1-old-school-server" />;
}
