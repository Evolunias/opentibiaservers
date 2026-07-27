import MistOfDeathSwedenServersKeywordPage, { generateMetadata } from './mist-of-death-sweden-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MistOfDeathSwedenServersKeywordPage />;
}
