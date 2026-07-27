import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-xanteria-ot-server');
}

export default function OldSchoolXanteriaOtServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-xanteria-ot-server" />;
}
