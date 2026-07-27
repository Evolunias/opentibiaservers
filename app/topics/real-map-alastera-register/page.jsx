import RealMapAlasteraRegisterKeywordPage, { generateMetadata } from './real-map-alastera-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapAlasteraRegisterKeywordPage />;
}
