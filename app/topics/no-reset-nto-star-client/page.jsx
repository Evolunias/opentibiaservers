import NoResetNtoStarClientKeywordPage, { generateMetadata } from './no-reset-nto-star-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetNtoStarClientKeywordPage />;
}
