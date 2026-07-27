import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-8-6-old-school-server');
}

export default function Sabrehaven86OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-8-6-old-school-server" />;
}
