import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-coxaot-official');
}

export default function FreshStartCoxaotOfficialKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-coxaot-official" />;
}
