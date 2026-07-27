import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-10-0-old-school-server');
}

export default function Sabrehaven100OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-10-0-old-school-server" />;
}
