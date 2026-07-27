import RealMapThaisotRegisterKeywordPage, { generateMetadata } from './real-map-thaisot-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapThaisotRegisterKeywordPage />;
}
