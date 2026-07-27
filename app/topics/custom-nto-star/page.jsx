import CustomNtoStarKeywordPage, { generateMetadata } from './custom-nto-star';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomNtoStarKeywordPage />;
}
