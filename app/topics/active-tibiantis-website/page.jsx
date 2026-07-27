import ActiveTibiantisWebsiteKeywordPage, { generateMetadata } from './active-tibiantis-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibiantisWebsiteKeywordPage />;
}
