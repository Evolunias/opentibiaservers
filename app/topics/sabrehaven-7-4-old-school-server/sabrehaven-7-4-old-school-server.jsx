import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-7-4-old-school-server');
}

export default function Sabrehaven74OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-7-4-old-school-server" />;
}
