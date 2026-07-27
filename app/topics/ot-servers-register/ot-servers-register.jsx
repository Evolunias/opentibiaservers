import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ot-servers-register');
}

export default function OtServersRegisterKeywordPage() {
  return <StaticKeywordPage slug="ot-servers-register" />;
}
