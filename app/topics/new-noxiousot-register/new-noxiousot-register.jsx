import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-noxiousot-register');
}

export default function NewNoxiousotRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-noxiousot-register" />;
}
