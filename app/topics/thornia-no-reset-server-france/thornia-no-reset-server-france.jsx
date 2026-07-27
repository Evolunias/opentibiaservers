import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-no-reset-server-france');
}

export default function ThorniaNoResetServerFranceKeywordPage() {
  return <StaticKeywordPage slug="thornia-no-reset-server-france" />;
}
