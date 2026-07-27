import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-13-old-school-server');
}

export default function Sabrehaven13OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-13-old-school-server" />;
}
