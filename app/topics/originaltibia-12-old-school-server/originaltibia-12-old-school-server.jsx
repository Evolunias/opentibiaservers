import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-12-old-school-server');
}

export default function Originaltibia12OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-12-old-school-server" />;
}
