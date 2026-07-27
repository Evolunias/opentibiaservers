import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-8-4-no-reset-server');
}

export default function Neprenia84NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-8-4-no-reset-server" />;
}
