import RealMapShadowcoresRegisterKeywordPage, { generateMetadata } from './real-map-shadowcores-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapShadowcoresRegisterKeywordPage />;
}
