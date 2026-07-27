import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-coxaot-official');
}

export default function ActiveCoxaotOfficialKeywordPage() {
  return <StaticKeywordPage slug="active-coxaot-official" />;
}
