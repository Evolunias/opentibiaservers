import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-13-old-school-server');
}

export default function Demolidores13OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="demolidores-13-old-school-server" />;
}
