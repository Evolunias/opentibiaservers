import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-no-reset-server-france');
}

export default function LumineraNoResetServerFranceKeywordPage() {
  return <StaticKeywordPage slug="luminera-no-reset-server-france" />;
}
