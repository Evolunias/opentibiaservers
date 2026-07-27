import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('myaac-register');
}

export default function MyaacRegisterKeywordPage() {
  return <StaticKeywordPage slug="myaac-register" />;
}
