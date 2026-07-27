import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-demolidores-ot');
}

export default function ActiveDemolidoresOtKeywordPage() {
  return <StaticKeywordPage slug="active-demolidores-ot" />;
}
