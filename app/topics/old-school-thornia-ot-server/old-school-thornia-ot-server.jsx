import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-thornia-ot-server');
}

export default function OldSchoolThorniaOtServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-thornia-ot-server" />;
}
