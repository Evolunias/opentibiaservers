import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ot-servers-france');
}

export default function OtServersFranceKeywordPage() {
  return <StaticKeywordPage slug="ot-servers-france" />;
}
