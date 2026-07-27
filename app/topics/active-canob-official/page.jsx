import ActiveCanobOfficialKeywordPage, { generateMetadata } from './active-canob-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveCanobOfficialKeywordPage />;
}
