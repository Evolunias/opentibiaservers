import CurrentNostaltherOfficialKeywordPage, { generateMetadata } from './current-nostalther-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentNostaltherOfficialKeywordPage />;
}
