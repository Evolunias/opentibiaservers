import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-old-school-server-france');
}

export default function DemolidoresOldSchoolServerFranceKeywordPage() {
  return <StaticKeywordPage slug="demolidores-old-school-server-france" />;
}
