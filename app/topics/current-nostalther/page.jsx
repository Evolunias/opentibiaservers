import CurrentNostaltherKeywordPage, { generateMetadata } from './current-nostalther';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentNostaltherKeywordPage />;
}
