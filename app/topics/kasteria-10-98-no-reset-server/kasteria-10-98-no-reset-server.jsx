import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-10-98-no-reset-server');
}

export default function Kasteria1098NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-10-98-no-reset-server" />;
}
