import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-low-exp-server-argentina');
}

export default function ImperianicLowExpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="imperianic-low-exp-server-argentina" />;
}
