import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-empirebr-login');
}

export default function FreshStartEmpirebrLoginKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-empirebr-login" />;
}
