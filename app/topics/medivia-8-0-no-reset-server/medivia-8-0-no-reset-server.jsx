import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-8-0-no-reset-server');
}

export default function Medivia80NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-8-0-no-reset-server" />;
}
