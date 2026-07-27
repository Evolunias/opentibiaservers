import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-15-old-school-server');
}

export default function Neprenia15OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-15-old-school-server" />;
}
