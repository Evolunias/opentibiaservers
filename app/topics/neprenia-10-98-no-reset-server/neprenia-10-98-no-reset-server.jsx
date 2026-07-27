import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-10-98-no-reset-server');
}

export default function Neprenia1098NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-10-98-no-reset-server" />;
}
