import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-imperianic-register');
}

export default function LowrateImperianicRegisterKeywordPage() {
  return <StaticKeywordPage slug="lowrate-imperianic-register" />;
}
