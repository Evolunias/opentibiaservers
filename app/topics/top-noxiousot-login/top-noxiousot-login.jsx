import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-noxiousot-login');
}

export default function TopNoxiousotLoginKeywordPage() {
  return <StaticKeywordPage slug="top-noxiousot-login" />;
}
