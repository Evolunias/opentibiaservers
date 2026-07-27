import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-classicus-register');
}

export default function ActiveClassicusRegisterKeywordPage() {
  return <StaticKeywordPage slug="active-classicus-register" />;
}
