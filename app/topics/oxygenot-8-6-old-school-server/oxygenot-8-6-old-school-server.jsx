import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-8-6-old-school-server');
}

export default function Oxygenot86OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-8-6-old-school-server" />;
}
