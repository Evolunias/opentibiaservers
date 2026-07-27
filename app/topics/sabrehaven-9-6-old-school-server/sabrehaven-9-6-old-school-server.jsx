import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-9-6-old-school-server');
}

export default function Sabrehaven96OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-9-6-old-school-server" />;
}
