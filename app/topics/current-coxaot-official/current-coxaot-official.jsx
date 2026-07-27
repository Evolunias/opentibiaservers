import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-coxaot-official');
}

export default function CurrentCoxaotOfficialKeywordPage() {
  return <StaticKeywordPage slug="current-coxaot-official" />;
}
