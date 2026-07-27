import ActiveRealestaKeywordPage, { generateMetadata } from './active-realesta';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveRealestaKeywordPage />;
}
