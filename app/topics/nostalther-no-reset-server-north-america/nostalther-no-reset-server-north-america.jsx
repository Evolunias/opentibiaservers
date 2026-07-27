import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-no-reset-server-north-america');
}

export default function NostaltherNoResetServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="nostalther-no-reset-server-north-america" />;
}
