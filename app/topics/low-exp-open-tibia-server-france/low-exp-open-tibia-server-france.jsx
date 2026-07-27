import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-open-tibia-server-france');
}

export default function LowExpOpenTibiaServerFranceKeywordPage() {
  return <StaticKeywordPage slug="low-exp-open-tibia-server-france" />;
}
