import HighExpServersPolandKeywordPage, { generateMetadata } from './high-exp-servers-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpServersPolandKeywordPage />;
}
