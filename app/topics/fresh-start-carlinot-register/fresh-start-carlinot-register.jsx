import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-carlinot-register');
}

export default function FreshStartCarlinotRegisterKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-carlinot-register" />;
}
