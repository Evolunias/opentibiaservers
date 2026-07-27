import ActiveClassicusOfficialKeywordPage, { generateMetadata } from './active-classicus-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveClassicusOfficialKeywordPage />;
}
