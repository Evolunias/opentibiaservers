import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-7-1-old-school-server');
}

export default function Sabrehaven71OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-7-1-old-school-server" />;
}
