import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-13-old-school-server');
}

export default function Originaltibia13OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-13-old-school-server" />;
}
