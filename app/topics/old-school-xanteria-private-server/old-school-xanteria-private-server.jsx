import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-xanteria-private-server');
}

export default function OldSchoolXanteriaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-xanteria-private-server" />;
}
