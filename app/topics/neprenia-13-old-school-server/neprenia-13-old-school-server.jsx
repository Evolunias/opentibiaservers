import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-13-old-school-server');
}

export default function Neprenia13OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-13-old-school-server" />;
}
