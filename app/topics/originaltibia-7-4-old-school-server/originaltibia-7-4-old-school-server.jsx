import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-7-4-old-school-server');
}

export default function Originaltibia74OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-7-4-old-school-server" />;
}
