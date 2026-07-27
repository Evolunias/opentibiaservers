import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-eldera-register');
}

export default function TopElderaRegisterKeywordPage() {
  return <StaticKeywordPage slug="top-eldera-register" />;
}
