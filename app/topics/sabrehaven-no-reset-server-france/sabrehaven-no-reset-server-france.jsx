import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-no-reset-server-france');
}

export default function SabrehavenNoResetServerFranceKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-no-reset-server-france" />;
}
