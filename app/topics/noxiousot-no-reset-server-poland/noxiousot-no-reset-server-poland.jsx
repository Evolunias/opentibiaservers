import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-no-reset-server-poland');
}

export default function NoxiousotNoResetServerPolandKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-no-reset-server-poland" />;
}
