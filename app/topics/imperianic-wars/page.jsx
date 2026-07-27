import ImperianicWarsKeywordPage, { generateMetadata } from './imperianic-wars';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ImperianicWarsKeywordPage />;
}
