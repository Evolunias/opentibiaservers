import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-launcher');
}

export default function RookgaardTalesLauncherKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-launcher" />;
}
