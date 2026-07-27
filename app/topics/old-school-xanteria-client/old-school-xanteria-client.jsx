import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-xanteria-client');
}

export default function OldSchoolXanteriaClientKeywordPage() {
  return <StaticKeywordPage slug="old-school-xanteria-client" />;
}
