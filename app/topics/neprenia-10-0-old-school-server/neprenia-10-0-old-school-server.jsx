import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-10-0-old-school-server');
}

export default function Neprenia100OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-10-0-old-school-server" />;
}
