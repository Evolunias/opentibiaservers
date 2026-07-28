import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('otchaos-mobile-desktop');
}

export default function OtchaosMobileDesktopPage() {
  return <StaticExactMatchPage slug="otchaos-mobile-desktop" />;
}
