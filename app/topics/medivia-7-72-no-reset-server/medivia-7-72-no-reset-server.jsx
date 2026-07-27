import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-7-72-no-reset-server');
}

export default function Medivia772NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-7-72-no-reset-server" />;
}
