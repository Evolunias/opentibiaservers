import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-miracle-register');
}

export default function FreshStartMiracleRegisterKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-miracle-register" />;
}
