import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-14-old-school-server');
}

export default function Originaltibia14OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-14-old-school-server" />;
}
