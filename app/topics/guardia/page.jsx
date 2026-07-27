import GuardiaKeywordPage, { generateMetadata } from './guardia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <GuardiaKeywordPage />;
}
