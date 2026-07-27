import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-coxaot-register');
}

export default function NewCoxaotRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-coxaot-register" />;
}
