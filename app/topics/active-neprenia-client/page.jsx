import ActiveNepreniaClientKeywordPage, { generateMetadata } from './active-neprenia-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveNepreniaClientKeywordPage />;
}
