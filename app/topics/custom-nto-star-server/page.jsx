import CustomNtoStarServerKeywordPage, { generateMetadata } from './custom-nto-star-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomNtoStarServerKeywordPage />;
}
