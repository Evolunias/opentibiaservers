import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-empirebr-ot');
}

export default function FreshStartEmpirebrOtKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-empirebr-ot" />;
}
