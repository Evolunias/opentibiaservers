import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-high-exp-server-france');
}

export default function SabrehavenHighExpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-high-exp-server-france" />;
}
