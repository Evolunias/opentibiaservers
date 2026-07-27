import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-coxaot-official');
}

export default function NewCoxaotOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-coxaot-official" />;
}
