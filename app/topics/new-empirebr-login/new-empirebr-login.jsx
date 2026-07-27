import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-empirebr-login');
}

export default function NewEmpirebrLoginKeywordPage() {
  return <StaticKeywordPage slug="new-empirebr-login" />;
}
