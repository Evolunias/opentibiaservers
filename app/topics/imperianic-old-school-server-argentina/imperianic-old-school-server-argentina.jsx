import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-old-school-server-argentina');
}

export default function ImperianicOldSchoolServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="imperianic-old-school-server-argentina" />;
}
