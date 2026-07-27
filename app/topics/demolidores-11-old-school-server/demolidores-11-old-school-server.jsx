import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-11-old-school-server');
}

export default function Demolidores11OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="demolidores-11-old-school-server" />;
}
