import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-open-tibia-server-latin-america');
}

export default function NoResetOpenTibiaServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-open-tibia-server-latin-america" />;
}
