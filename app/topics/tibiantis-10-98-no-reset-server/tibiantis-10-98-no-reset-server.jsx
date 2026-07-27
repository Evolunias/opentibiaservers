import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-10-98-no-reset-server');
}

export default function Tibiantis1098NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-10-98-no-reset-server" />;
}
