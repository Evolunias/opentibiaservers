import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-14-old-school-server');
}

export default function Neprenia14OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-14-old-school-server" />;
}
