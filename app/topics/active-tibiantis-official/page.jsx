import ActiveTibiantisOfficialKeywordPage, { generateMetadata } from './active-tibiantis-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibiantisOfficialKeywordPage />;
}
