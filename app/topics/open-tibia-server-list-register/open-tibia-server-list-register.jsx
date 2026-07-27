import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('open-tibia-server-list-register');
}

export default function OpenTibiaServerListRegisterKeywordPage() {
  return <StaticKeywordPage slug="open-tibia-server-list-register" />;
}
