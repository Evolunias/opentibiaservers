import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-15-old-school-server');
}

export default function Originaltibia15OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-15-old-school-server" />;
}
