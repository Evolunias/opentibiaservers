import MistOfDeathGermanyServersKeywordPage, { generateMetadata } from './mist-of-death-germany-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MistOfDeathGermanyServersKeywordPage />;
}
