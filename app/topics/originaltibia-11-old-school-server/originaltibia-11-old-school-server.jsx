import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-11-old-school-server');
}

export default function Originaltibia11OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-11-old-school-server" />;
}
