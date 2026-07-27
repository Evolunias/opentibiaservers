import LowExpServerListPolandKeywordPage, { generateMetadata } from './low-exp-server-list-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpServerListPolandKeywordPage />;
}
