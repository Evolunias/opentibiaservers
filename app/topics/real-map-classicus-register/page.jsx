import RealMapClassicusRegisterKeywordPage, { generateMetadata } from './real-map-classicus-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapClassicusRegisterKeywordPage />;
}
