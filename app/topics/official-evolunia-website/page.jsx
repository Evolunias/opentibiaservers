import OfficialEvoluniaWebsiteKeywordPage, { generateMetadata } from './official-evolunia-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialEvoluniaWebsiteKeywordPage />;
}
