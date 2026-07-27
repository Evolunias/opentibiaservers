import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-no-reset-server-brazil');
}

export default function TibiaretroNoResetServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-no-reset-server-brazil" />;
}
