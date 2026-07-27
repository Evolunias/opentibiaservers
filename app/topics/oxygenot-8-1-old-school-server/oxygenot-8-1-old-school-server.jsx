import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-8-1-old-school-server');
}

export default function Oxygenot81OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-8-1-old-school-server" />;
}
