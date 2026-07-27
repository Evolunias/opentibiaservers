import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-8-4-old-school-server');
}

export default function Demolidores84OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="demolidores-8-4-old-school-server" />;
}
