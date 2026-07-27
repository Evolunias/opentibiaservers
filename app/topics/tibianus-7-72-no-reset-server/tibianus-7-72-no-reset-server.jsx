import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-7-72-no-reset-server');
}

export default function Tibianus772NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-7-72-no-reset-server" />;
}
