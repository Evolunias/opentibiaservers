import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-thornia-ots');
}

export default function NoResetThorniaOtsKeywordPage() {
  return <StaticKeywordPage slug="no-reset-thornia-ots" />;
}
