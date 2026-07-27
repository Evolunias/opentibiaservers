import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-demolidores-ot');
}

export default function NewDemolidoresOtKeywordPage() {
  return <StaticKeywordPage slug="new-demolidores-ot" />;
}
