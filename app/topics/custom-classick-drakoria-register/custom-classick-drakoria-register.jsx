import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-classick-drakoria-register');
}

export default function CustomClassickDrakoriaRegisterKeywordPage() {
  return <StaticKeywordPage slug="custom-classick-drakoria-register" />;
}
