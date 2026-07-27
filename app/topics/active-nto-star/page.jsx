import ActiveNtoStarKeywordPage, { generateMetadata } from './active-nto-star';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveNtoStarKeywordPage />;
}
