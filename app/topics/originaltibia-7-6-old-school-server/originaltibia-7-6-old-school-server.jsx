import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-7-6-old-school-server');
}

export default function Originaltibia76OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-7-6-old-school-server" />;
}
