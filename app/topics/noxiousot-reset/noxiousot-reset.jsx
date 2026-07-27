import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-reset');
}

export default function NoxiousotResetKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-reset" />;
}
