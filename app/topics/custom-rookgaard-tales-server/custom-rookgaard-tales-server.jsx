import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-rookgaard-tales-server');
}

export default function CustomRookgaardTalesServerKeywordPage() {
  return <StaticKeywordPage slug="custom-rookgaard-tales-server" />;
}
