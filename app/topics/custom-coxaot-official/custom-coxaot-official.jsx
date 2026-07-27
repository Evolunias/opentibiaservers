import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-coxaot-official');
}

export default function CustomCoxaotOfficialKeywordPage() {
  return <StaticKeywordPage slug="custom-coxaot-official" />;
}
