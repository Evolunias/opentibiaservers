import PopularEvoluniaWebsiteKeywordPage, { generateMetadata } from './popular-evolunia-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularEvoluniaWebsiteKeywordPage />;
}
