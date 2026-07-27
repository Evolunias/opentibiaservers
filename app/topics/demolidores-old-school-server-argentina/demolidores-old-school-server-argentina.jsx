import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-old-school-server-argentina');
}

export default function DemolidoresOldSchoolServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="demolidores-old-school-server-argentina" />;
}
