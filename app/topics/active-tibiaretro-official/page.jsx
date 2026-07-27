import ActiveTibiaretroOfficialKeywordPage, { generateMetadata } from './active-tibiaretro-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibiaretroOfficialKeywordPage />;
}
