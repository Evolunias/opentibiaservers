import NewNtoStarClientKeywordPage, { generateMetadata } from './new-nto-star-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewNtoStarClientKeywordPage />;
}
