import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-9-6-old-school-server');
}

export default function Originaltibia96OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-9-6-old-school-server" />;
}
