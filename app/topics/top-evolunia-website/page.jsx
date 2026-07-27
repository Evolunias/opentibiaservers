import TopEvoluniaWebsiteKeywordPage, { generateMetadata } from './top-evolunia-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopEvoluniaWebsiteKeywordPage />;
}
