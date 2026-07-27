import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-rookgaard-tales-private-server');
}

export default function OldSchoolRookgaardTalesPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-rookgaard-tales-private-server" />;
}
