import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-nostalther-register');
}

export default function LowrateNostaltherRegisterKeywordPage() {
  return <StaticKeywordPage slug="lowrate-nostalther-register" />;
}
