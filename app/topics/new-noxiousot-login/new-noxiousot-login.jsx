import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-noxiousot-login');
}

export default function NewNoxiousotLoginKeywordPage() {
  return <StaticKeywordPage slug="new-noxiousot-login" />;
}
