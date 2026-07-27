import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('open-tibia-servers-register');
}

export default function OpenTibiaServersRegisterKeywordPage() {
  return <StaticKeywordPage slug="open-tibia-servers-register" />;
}
