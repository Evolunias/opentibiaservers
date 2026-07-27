import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-launch');
}

export default function RookgaardTalesLaunchKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-launch" />;
}
