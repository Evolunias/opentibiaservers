import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-official');
}

export default function CoxaotOfficialKeywordPage() {
  return <StaticKeywordPage slug="coxaot-official" />;
}
