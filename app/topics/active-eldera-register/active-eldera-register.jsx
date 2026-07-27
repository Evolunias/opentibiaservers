import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-eldera-register');
}

export default function ActiveElderaRegisterKeywordPage() {
  return <StaticKeywordPage slug="active-eldera-register" />;
}
