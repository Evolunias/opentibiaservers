import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-no-reset-server-france');
}

export default function NostaltherNoResetServerFranceKeywordPage() {
  return <StaticKeywordPage slug="nostalther-no-reset-server-france" />;
}
