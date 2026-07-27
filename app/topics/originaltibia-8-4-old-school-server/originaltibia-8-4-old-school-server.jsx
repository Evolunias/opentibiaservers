import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-8-4-old-school-server');
}

export default function Originaltibia84OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-8-4-old-school-server" />;
}
