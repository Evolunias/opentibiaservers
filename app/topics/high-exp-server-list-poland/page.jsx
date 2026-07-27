import HighExpServerListPolandKeywordPage, { generateMetadata } from './high-exp-server-list-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpServerListPolandKeywordPage />;
}
