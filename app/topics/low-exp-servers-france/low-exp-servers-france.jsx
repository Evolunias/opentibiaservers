import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-servers-france');
}

export default function LowExpServersFranceKeywordPage() {
  return <StaticKeywordPage slug="low-exp-servers-france" />;
}
