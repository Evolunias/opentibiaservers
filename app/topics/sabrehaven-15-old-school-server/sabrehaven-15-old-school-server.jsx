import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-15-old-school-server');
}

export default function Sabrehaven15OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-15-old-school-server" />;
}
