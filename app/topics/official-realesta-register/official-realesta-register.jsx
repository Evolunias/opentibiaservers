import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-realesta-register');
}

export default function OfficialRealestaRegisterKeywordPage() {
  return <StaticKeywordPage slug="official-realesta-register" />;
}
