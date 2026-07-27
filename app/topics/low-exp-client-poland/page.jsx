import LowExpClientPolandKeywordPage, { generateMetadata } from './low-exp-client-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpClientPolandKeywordPage />;
}
