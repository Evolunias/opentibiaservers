import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-12-old-school-server');
}

export default function Demolidores12OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="demolidores-12-old-school-server" />;
}
