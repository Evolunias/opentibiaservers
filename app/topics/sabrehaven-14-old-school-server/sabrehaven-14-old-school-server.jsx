import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-14-old-school-server');
}

export default function Sabrehaven14OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-14-old-school-server" />;
}
