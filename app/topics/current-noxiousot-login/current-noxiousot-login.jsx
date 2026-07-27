import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-noxiousot-login');
}

export default function CurrentNoxiousotLoginKeywordPage() {
  return <StaticKeywordPage slug="current-noxiousot-login" />;
}
