import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibia-private-server-latin-america');
}

export default function NoResetTibiaPrivateServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibia-private-server-latin-america" />;
}
