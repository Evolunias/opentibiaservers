import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-14-old-school-server');
}

export default function Demolidores14OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="demolidores-14-old-school-server" />;
}
