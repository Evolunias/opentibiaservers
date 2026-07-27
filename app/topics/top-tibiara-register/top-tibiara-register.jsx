import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiara-register');
}

export default function TopTibiaraRegisterKeywordPage() {
  return <StaticKeywordPage slug="top-tibiara-register" />;
}
