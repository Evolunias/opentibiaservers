import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-noxiousot-client');
}

export default function NoResetNoxiousotClientKeywordPage() {
  return <StaticKeywordPage slug="no-reset-noxiousot-client" />;
}
