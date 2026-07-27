import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-yurots-register');
}

export default function OfficialYurotsRegisterKeywordPage() {
  return <StaticKeywordPage slug="official-yurots-register" />;
}
