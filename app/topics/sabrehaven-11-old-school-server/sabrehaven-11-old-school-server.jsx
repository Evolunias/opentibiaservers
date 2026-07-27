import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-11-old-school-server');
}

export default function Sabrehaven11OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-11-old-school-server" />;
}
