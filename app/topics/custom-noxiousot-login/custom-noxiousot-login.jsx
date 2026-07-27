import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-noxiousot-login');
}

export default function CustomNoxiousotLoginKeywordPage() {
  return <StaticKeywordPage slug="custom-noxiousot-login" />;
}
