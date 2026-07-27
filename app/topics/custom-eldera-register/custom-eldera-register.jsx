import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-eldera-register');
}

export default function CustomElderaRegisterKeywordPage() {
  return <StaticKeywordPage slug="custom-eldera-register" />;
}
