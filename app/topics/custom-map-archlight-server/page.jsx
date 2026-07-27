import CustomMapArchlightServerKeywordPage, { generateMetadata } from './custom-map-archlight-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapArchlightServerKeywordPage />;
}
