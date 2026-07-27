import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-10-98-no-reset-server');
}

export default function Shadowcores1098NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-10-98-no-reset-server" />;
}
