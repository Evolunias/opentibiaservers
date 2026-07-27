import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-register');
}

export default function CarlinotRegisterKeywordPage() {
  return <StaticKeywordPage slug="carlinot-register" />;
}
