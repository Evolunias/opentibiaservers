import ActiveImperianicKeywordPage, { generateMetadata } from './active-imperianic';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveImperianicKeywordPage />;
}
