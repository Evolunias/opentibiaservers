import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-10-98-no-reset-server');
}

export default function Tibianus1098NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-10-98-no-reset-server" />;
}
