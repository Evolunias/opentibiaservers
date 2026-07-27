import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-9-6-no-reset-server');
}

export default function Neprenia96NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-9-6-no-reset-server" />;
}
