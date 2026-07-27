import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-rookgaard-tales-server');
}

export default function NoResetRookgaardTalesServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-rookgaard-tales-server" />;
}
