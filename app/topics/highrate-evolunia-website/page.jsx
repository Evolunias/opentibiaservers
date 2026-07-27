import HighrateEvoluniaWebsiteKeywordPage, { generateMetadata } from './highrate-evolunia-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateEvoluniaWebsiteKeywordPage />;
}
