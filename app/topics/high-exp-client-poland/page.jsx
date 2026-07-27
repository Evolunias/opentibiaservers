import HighExpClientPolandKeywordPage, { generateMetadata } from './high-exp-client-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpClientPolandKeywordPage />;
}
