import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-imperianic-register');
}

export default function OfficialImperianicRegisterKeywordPage() {
  return <StaticKeywordPage slug="official-imperianic-register" />;
}
