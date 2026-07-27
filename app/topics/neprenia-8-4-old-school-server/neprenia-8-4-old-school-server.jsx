import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-8-4-old-school-server');
}

export default function Neprenia84OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-8-4-old-school-server" />;
}
