import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-8-0-old-school-server');
}

export default function Oxygenot80OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-8-0-old-school-server" />;
}
