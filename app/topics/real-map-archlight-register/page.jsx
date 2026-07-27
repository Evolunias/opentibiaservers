import RealMapArchlightRegisterKeywordPage, { generateMetadata } from './real-map-archlight-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapArchlightRegisterKeywordPage />;
}
