import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-empirebr-private-server');
}

export default function CustomEmpirebrPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="custom-empirebr-private-server" />;
}
