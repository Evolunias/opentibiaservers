import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-demolidores-ot');
}

export default function NoResetDemolidoresOtKeywordPage() {
  return <StaticKeywordPage slug="no-reset-demolidores-ot" />;
}
