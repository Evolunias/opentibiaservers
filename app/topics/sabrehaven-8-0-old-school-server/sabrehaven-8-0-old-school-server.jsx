import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-8-0-old-school-server');
}

export default function Sabrehaven80OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-8-0-old-school-server" />;
}
