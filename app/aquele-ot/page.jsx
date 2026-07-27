import AqueleOtPage, { generateMetadata } from './aquele-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AqueleOtPage />;
}
