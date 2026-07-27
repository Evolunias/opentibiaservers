import MistOfDeathPolandServersKeywordPage, { generateMetadata } from './mist-of-death-poland-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MistOfDeathPolandServersKeywordPage />;
}
