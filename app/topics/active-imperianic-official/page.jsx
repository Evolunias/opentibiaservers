import ActiveImperianicOfficialKeywordPage, { generateMetadata } from './active-imperianic-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveImperianicOfficialKeywordPage />;
}
