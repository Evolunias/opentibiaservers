import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-login');
}

export default function NoxiousotLoginKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-login" />;
}
