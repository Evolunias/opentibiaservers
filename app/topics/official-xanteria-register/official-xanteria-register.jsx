import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-xanteria-register');
}

export default function OfficialXanteriaRegisterKeywordPage() {
  return <StaticKeywordPage slug="official-xanteria-register" />;
}
