import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-coxaot-register');
}

export default function FreshStartCoxaotRegisterKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-coxaot-register" />;
}
