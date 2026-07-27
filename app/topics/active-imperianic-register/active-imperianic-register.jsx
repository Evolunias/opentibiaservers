import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-imperianic-register');
}

export default function ActiveImperianicRegisterKeywordPage() {
  return <StaticKeywordPage slug="active-imperianic-register" />;
}
