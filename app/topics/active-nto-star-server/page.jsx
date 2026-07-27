import ActiveNtoStarServerKeywordPage, { generateMetadata } from './active-nto-star-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveNtoStarServerKeywordPage />;
}
