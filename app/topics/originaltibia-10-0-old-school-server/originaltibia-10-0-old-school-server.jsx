import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-10-0-old-school-server');
}

export default function Originaltibia100OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-10-0-old-school-server" />;
}
