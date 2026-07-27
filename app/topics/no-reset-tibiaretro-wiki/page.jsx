import NoResetTibiaretroWikiKeywordPage, { generateMetadata } from './no-reset-tibiaretro-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetTibiaretroWikiKeywordPage />;
}
