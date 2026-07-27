import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-10-0-old-school-server');
}

export default function Demolidores100OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="demolidores-10-0-old-school-server" />;
}
