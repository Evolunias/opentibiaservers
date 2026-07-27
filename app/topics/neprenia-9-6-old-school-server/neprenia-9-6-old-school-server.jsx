import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-9-6-old-school-server');
}

export default function Neprenia96OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-9-6-old-school-server" />;
}
