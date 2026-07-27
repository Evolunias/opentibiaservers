import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-empirebr-website');
}

export default function NoResetEmpirebrWebsiteKeywordPage() {
  return <StaticKeywordPage slug="no-reset-empirebr-website" />;
}
