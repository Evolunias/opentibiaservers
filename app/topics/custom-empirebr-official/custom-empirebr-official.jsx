import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-empirebr-official');
}

export default function CustomEmpirebrOfficialKeywordPage() {
  return <StaticKeywordPage slug="custom-empirebr-official" />;
}
