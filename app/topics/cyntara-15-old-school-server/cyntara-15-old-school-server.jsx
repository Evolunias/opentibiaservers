import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-15-old-school-server');
}

export default function Cyntara15OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-15-old-school-server" />;
}
