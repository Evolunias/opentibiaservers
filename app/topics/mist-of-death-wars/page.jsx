import MistOfDeathWarsKeywordPage, { generateMetadata } from './mist-of-death-wars';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MistOfDeathWarsKeywordPage />;
}
