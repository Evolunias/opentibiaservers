import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-eldera-register');
}

export default function LowrateElderaRegisterKeywordPage() {
  return <StaticKeywordPage slug="lowrate-eldera-register" />;
}
