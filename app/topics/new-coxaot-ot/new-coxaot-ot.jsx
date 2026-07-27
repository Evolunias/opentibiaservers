import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-coxaot-ot');
}

export default function NewCoxaotOtKeywordPage() {
  return <StaticKeywordPage slug="new-coxaot-ot" />;
}
