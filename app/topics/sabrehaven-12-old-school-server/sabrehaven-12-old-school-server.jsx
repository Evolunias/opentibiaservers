import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-12-old-school-server');
}

export default function Sabrehaven12OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-12-old-school-server" />;
}
