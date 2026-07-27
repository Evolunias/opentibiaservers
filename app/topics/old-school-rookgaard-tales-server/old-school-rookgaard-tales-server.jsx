import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-rookgaard-tales-server');
}

export default function OldSchoolRookgaardTalesServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-rookgaard-tales-server" />;
}
