import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-demolidores-register');
}

export default function OfficialDemolidoresRegisterKeywordPage() {
  return <StaticKeywordPage slug="official-demolidores-register" />;
}
