import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-servers-france');
}

export default function HighExpServersFranceKeywordPage() {
  return <StaticKeywordPage slug="high-exp-servers-france" />;
}
