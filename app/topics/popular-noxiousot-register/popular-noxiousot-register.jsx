import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-noxiousot-register');
}

export default function PopularNoxiousotRegisterKeywordPage() {
  return <StaticKeywordPage slug="popular-noxiousot-register" />;
}
