import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-7-1-old-school-server');
}

export default function Neprenia71OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-7-1-old-school-server" />;
}
