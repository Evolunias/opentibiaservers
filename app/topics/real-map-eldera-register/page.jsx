import RealMapElderaRegisterKeywordPage, { generateMetadata } from './real-map-eldera-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapElderaRegisterKeywordPage />;
}
