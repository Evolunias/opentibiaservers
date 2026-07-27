import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-7-72-old-school-server');
}

export default function Sabrehaven772OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-7-72-old-school-server" />;
}
