import ActiveImperianicClientKeywordPage, { generateMetadata } from './active-imperianic-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveImperianicClientKeywordPage />;
}
