import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-7-6-old-school-server');
}

export default function Neprenia76OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-7-6-old-school-server" />;
}
