import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-launcher');
}

export default function CarlinotLauncherKeywordPage() {
  return <StaticKeywordPage slug="carlinot-launcher" />;
}
