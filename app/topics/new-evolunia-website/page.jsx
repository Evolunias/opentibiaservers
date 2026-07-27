import NewEvoluniaWebsiteKeywordPage, { generateMetadata } from './new-evolunia-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewEvoluniaWebsiteKeywordPage />;
}
