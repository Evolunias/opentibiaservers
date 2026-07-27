import RealMapYurotsRegisterKeywordPage, { generateMetadata } from './real-map-yurots-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapYurotsRegisterKeywordPage />;
}
