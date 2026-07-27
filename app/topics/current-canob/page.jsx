import CurrentCanobKeywordPage, { generateMetadata } from './current-canob';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentCanobKeywordPage />;
}
