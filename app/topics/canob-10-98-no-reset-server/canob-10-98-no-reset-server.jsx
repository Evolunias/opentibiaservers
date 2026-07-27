import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-10-98-no-reset-server');
}

export default function Canob1098NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="canob-10-98-no-reset-server" />;
}
