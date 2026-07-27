import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-alastera-register');
}

export default function OfficialAlasteraRegisterKeywordPage() {
  return <StaticKeywordPage slug="official-alastera-register" />;
}
