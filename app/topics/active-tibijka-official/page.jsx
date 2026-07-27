import ActiveTibijkaOfficialKeywordPage, { generateMetadata } from './active-tibijka-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibijkaOfficialKeywordPage />;
}
