import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-coxaot-tibia');
}

export default function CustomCoxaotTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-coxaot-tibia" />;
}
