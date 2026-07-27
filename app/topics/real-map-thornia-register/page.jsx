import RealMapThorniaRegisterKeywordPage, { generateMetadata } from './real-map-thornia-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapThorniaRegisterKeywordPage />;
}
