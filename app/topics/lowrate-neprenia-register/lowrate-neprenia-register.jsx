import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-neprenia-register');
}

export default function LowrateNepreniaRegisterKeywordPage() {
  return <StaticKeywordPage slug="lowrate-neprenia-register" />;
}
