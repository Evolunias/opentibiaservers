import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-15-old-school-server');
}

export default function Demolidores15OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="demolidores-15-old-school-server" />;
}
