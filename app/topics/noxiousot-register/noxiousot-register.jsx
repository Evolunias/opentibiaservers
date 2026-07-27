import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-register');
}

export default function NoxiousotRegisterKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-register" />;
}
