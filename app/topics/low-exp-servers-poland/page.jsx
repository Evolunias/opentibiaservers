import LowExpServersPolandKeywordPage, { generateMetadata } from './low-exp-servers-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpServersPolandKeywordPage />;
}
