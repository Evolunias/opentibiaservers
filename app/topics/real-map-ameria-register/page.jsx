import RealMapAmeriaRegisterKeywordPage, { generateMetadata } from './real-map-ameria-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapAmeriaRegisterKeywordPage />;
}
