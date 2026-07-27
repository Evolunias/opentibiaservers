import CurrentEvoluniaWebsiteKeywordPage, { generateMetadata } from './current-evolunia-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentEvoluniaWebsiteKeywordPage />;
}
