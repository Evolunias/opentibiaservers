import ActiveRealeraOfficialKeywordPage, { generateMetadata } from './active-realera-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveRealeraOfficialKeywordPage />;
}
