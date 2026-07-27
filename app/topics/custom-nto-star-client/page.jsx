import CustomNtoStarClientKeywordPage, { generateMetadata } from './custom-nto-star-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomNtoStarClientKeywordPage />;
}
