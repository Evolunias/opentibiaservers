import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-register');
}

export default function RealestaRegisterKeywordPage() {
  return <StaticKeywordPage slug="realesta-register" />;
}
