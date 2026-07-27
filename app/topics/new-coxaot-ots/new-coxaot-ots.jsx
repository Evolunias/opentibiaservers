import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-coxaot-ots');
}

export default function NewCoxaotOtsKeywordPage() {
  return <StaticKeywordPage slug="new-coxaot-ots" />;
}
