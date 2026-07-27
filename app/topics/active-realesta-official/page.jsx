import ActiveRealestaOfficialKeywordPage, { generateMetadata } from './active-realesta-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveRealestaOfficialKeywordPage />;
}
