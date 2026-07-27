import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-low-exp-server-france');
}

export default function SabrehavenLowExpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-low-exp-server-france" />;
}
