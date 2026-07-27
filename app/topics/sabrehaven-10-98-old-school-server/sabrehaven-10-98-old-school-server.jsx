import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-10-98-old-school-server');
}

export default function Sabrehaven1098OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-10-98-old-school-server" />;
}
