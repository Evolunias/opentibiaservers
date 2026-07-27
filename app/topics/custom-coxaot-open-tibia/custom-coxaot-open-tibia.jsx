import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-coxaot-open-tibia');
}

export default function CustomCoxaotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-coxaot-open-tibia" />;
}
