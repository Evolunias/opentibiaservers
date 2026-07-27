import ActiveImperianicLoginKeywordPage, { generateMetadata } from './active-imperianic-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveImperianicLoginKeywordPage />;
}
