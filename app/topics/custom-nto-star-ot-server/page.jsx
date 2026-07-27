import CustomNtoStarOtServerKeywordPage, { generateMetadata } from './custom-nto-star-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomNtoStarOtServerKeywordPage />;
}
