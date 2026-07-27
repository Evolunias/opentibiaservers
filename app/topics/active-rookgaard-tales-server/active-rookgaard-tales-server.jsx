import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-rookgaard-tales-server');
}

export default function ActiveRookgaardTalesServerKeywordPage() {
  return <StaticKeywordPage slug="active-rookgaard-tales-server" />;
}
