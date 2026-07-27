import RealMapKasteriaRegisterKeywordPage, { generateMetadata } from './real-map-kasteria-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapKasteriaRegisterKeywordPage />;
}
