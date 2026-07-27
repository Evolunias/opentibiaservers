import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-8-6-old-school-server');
}

export default function Originaltibia86OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-8-6-old-school-server" />;
}
