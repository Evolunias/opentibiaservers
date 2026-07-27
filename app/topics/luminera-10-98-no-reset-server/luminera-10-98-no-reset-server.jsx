import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-10-98-no-reset-server');
}

export default function Luminera1098NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-10-98-no-reset-server" />;
}
