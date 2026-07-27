import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-8-1-old-school-server');
}

export default function Sabrehaven81OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-8-1-old-school-server" />;
}
