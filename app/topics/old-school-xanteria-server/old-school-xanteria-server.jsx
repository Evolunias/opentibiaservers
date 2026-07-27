import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-xanteria-server');
}

export default function OldSchoolXanteriaServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-xanteria-server" />;
}
