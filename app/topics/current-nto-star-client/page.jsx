import CurrentNtoStarClientKeywordPage, { generateMetadata } from './current-nto-star-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentNtoStarClientKeywordPage />;
}
