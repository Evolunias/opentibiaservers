import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-oldera-register');
}

export default function NoResetOlderaRegisterKeywordPage() {
  return <StaticKeywordPage slug="no-reset-oldera-register" />;
}
