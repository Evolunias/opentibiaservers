import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-8-1-old-school-server');
}

export default function Originaltibia81OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-8-1-old-school-server" />;
}
