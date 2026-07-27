import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-rookgaard-tales-login');
}

export default function LowrateRookgaardTalesLoginKeywordPage() {
  return <StaticKeywordPage slug="lowrate-rookgaard-tales-login" />;
}
