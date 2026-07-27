import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-coxaot-ot');
}

export default function OfficialCoxaotOtKeywordPage() {
  return <StaticKeywordPage slug="official-coxaot-ot" />;
}
