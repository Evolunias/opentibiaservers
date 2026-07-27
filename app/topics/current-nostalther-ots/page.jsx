import CurrentNostaltherOtsKeywordPage, { generateMetadata } from './current-nostalther-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentNostaltherOtsKeywordPage />;
}
