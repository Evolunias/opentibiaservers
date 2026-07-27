import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-thornia-ot');
}

export default function NoResetThorniaOtKeywordPage() {
  return <StaticKeywordPage slug="no-reset-thornia-ot" />;
}
