import MistOfDeathChileServersKeywordPage, { generateMetadata } from './mist-of-death-chile-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MistOfDeathChileServersKeywordPage />;
}
