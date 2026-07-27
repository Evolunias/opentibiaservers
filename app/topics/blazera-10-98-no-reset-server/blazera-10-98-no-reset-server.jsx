import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-10-98-no-reset-server');
}

export default function Blazera1098NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-10-98-no-reset-server" />;
}
